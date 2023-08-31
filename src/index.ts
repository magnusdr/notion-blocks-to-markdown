import type {
  BlockObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints.d.ts";

export function notionBlocksToMarkdown(
  blocks: BlockObjectResponse[],
  opts?: {
    headingStartingLevel?: number;
    cleanOutput?: boolean;
    noHtml?: boolean;
  }
): string {
  let content = "";
  const headingStartingLevel = opts?.headingStartingLevel ?? 2;
  const cleanOutput = opts?.cleanOutput ?? false;
  const noHtml = opts?.noHtml ?? false;

  // Some parsing is stateful (tables)
  let lastBlockWasTableRow = false;

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block.has_children) {
      if (!cleanOutput) {
        content += `\n\`Block (${block.type}) has unresolved children\``;
      }
      continue;
    }
    switch (block.type) {
      case "heading_1":
        content += `\n\n${"#".repeat(
          headingStartingLevel
        )} ${notionRichTextItemsToMarkdown(block.heading_1.rich_text, {
          noHtml,
        })}`;
        break;
      case "heading_2":
        content += `\n\n${"#".repeat(
          headingStartingLevel
        )}# ${notionRichTextItemsToMarkdown(block.heading_2.rich_text, {
          noHtml,
        })}`;
        break;
      case "heading_3":
        content += `\n\n${"#".repeat(
          headingStartingLevel
        )}## ${notionRichTextItemsToMarkdown(block.heading_3.rich_text, {
          noHtml,
        })}`;
        break;
      case "paragraph":
        content += `\n\n${notionRichTextItemsToMarkdown(
          block.paragraph.rich_text,
          {
            noHtml,
          }
        )}`;
        break;
      case "bulleted_list_item":
        content += `\n* ${notionRichTextItemsToMarkdown(
          block.bulleted_list_item.rich_text,
          { noHtml }
        )}`;
        break;
      case "numbered_list_item":
        content += `\n1. ${notionRichTextItemsToMarkdown(
          block.numbered_list_item.rich_text,
          { noHtml }
        )}`;
        break;
      case "table_row":
        if (!lastBlockWasTableRow) {
          content += `\n\n|`;
        } else {
          content += `\n|`;
        }
        for (let i = 0; i < block.table_row.cells.length; i++) {
          const cell = block.table_row.cells[i];
          content += ` ${notionRichTextItemsToMarkdown(cell, { noHtml })} |`;
        }
        // If we're the first table row, then we're the heading row
        if (!lastBlockWasTableRow) {
          content += "\n|" + ` --- |`.repeat(block.table_row.cells.length);
          lastBlockWasTableRow = true;
        }
        break;
      case "quote":
        content += `\n\n> ${notionRichTextItemsToMarkdown(
          block.quote.rich_text,
          {
            noHtml,
          }
        )}`;
        break;
      case "code":
        content += `\n\n~~~${
          block.code.language
        }\n${notionRichTextItemsToMarkdown(block.code.rich_text, {
          noHtml,
        })}\n~~~`;
        break;
      case "image":
        if (block.image.type === "external") {
          content += `\n\n![${notionRichTextItemsToMarkdown(
            block.image.caption,
            {
              noHtml,
            }
          )}](${block.image.external.url})`;
        }
        break;
      default:
        if (!cleanOutput) {
          content += `\n\n\`Ignoring block type "${block.type}"\``;
        }
        break;
    }

    if (block.type !== "table_row") {
      lastBlockWasTableRow = false;
    }
  }

  return content;
}

export function notionRichTextItemsToMarkdown(
  richTextItems: RichTextItemResponse[],
  opts?: { noHtml: boolean }
): string {
  let richText = "";
  const noHtml = opts?.noHtml ?? false;
  for (let i = 0; i < richTextItems.length; i++) {
    const item = richTextItems[i];

    let text = item.plain_text.trim();

    /**
     * We need to preserve leading and trailing spaces, because
     * it's important to be compliant with markdown spec.
     */
    const leadingSpaceMatch = item.plain_text.match(/^(\s*)/);
    const trailingSpaceMatch = item.plain_text.match(/(\s*)$/);
    const leadingSpace = leadingSpaceMatch ? leadingSpaceMatch[0] : "";
    const trailingSpace = trailingSpaceMatch ? trailingSpaceMatch[0] : "";

    const annotations = item.annotations;

    if (annotations.code) text = `\`${text}\``;
    if (annotations.bold) text = `**${text}**`;
    if (annotations.italic) text = `_${text}_`;
    if (annotations.strikethrough) text = `~~${text}~~`;
    if (annotations.underline && !noHtml) text = `<u>${text}</u>`;
    if (annotations.color !== "default" && !noHtml) {
      text = `<span class="${annotations.color}">${text}</span>`;
    }
    if (item.href) text = `[${text}](${item.href})`;

    richText += leadingSpace + text + trailingSpace;
  }

  return richText;
}
