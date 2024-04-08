# `notion-blocks-to-markdown`

> Converts Notion `BlockObjectResponse[]` or `RichTextItemResponse[]` to markdown.

In contrast to [`notion-to-md`](https://github.com/souvikinator/notion-to-md), this package does not automatically fetch unresolved children. Fetcing blocks from Notion is left to the user, and if some blocks have unresolved contents, a message will be displayed instead.

## Usage

```ts
import { Client as NotionClient } from "@notionhq/client";
import {
  notionBlocksToMarkdown,
  notionRichTextItemsToMarkdown,
} from "notion-blocks-to-markdown";

const notionClient = new NotionClient({
  auth: process.env.NOTION_API_KEY,
});

const response = await notionClient.blocks.children.list({
  block_id: args.block_id,
});

const markdown = notionBlocksToMarkdown(blocks, {
  headingStartingLevel: 2,
  cleanOutput: true,
  noHtml: false,
});

const markdown = notionRichTextItemsToMarkdown(blocks[0].heading_1.rich_text, {
  noHtml: false,
});
```

## Supported block types

Here is a list of the supported block types at this point, feel free to open a PR if you'd like to expand this list.

| Block type           | Support                                |
| -------------------- | -------------------------------------- |
| `heading_1`          | ✅                                     |
| `heading_2`          | ✅                                     |
| `heading_3`          | ✅                                     |
| `paragraph`          | ✅                                     |
| `bulleted_list_item` | ✅                                     |
| `numbered_list_item` | ✅                                     |
| `table_row`          | ✅                                     |
| `quote`              | ✅                                     |
| `to_do`              | ❌                                     |
| `toggle`             | ❌                                     |
| `equation`           | ❌                                     |
| `code`               | ✅                                     |
| `callout`            | ❌                                     |
| `divider`            | ✅                                     |
| `breadcrumb`         | ❌                                     |
| `table_of_contents`  | ❌                                     |
| `image`              | ✅ Only if `image.type === "external"` |
| `video`              | ✅ Only if `video.type === "external"` |

... there are a lot more types, but not all of them makes sense to convert to markdown.

## Colors

Coloring the text in notion will result in a `<span className="blue" />`. So you'll have to write some CSS in order to get the colors you want. If you don't want this, you can use the `noHtml: true` option.

## Notes

Fetching the `BlockObjectResponse[]` is left to the user of this package. If a `BlockObjectResponse` with `has_children === true`, a simple string...

> "Block has unresolved children"

...will show up in markdown. You can hide these warnings using the `cleanOutput: true` option.
