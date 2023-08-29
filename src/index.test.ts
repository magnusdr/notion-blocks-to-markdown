import { notionBlocksToMarkdown } from "./index";

test("Example blocks should be formatted correctly", () => {
  const result = notionBlocksToMarkdown([
    {
      object: "block",
      id: "some-id",
      parent: {
        type: "page_id",
        page_id: "some-id",
      },
      created_time: "2023-08-25T12:40:00.000Z",
      last_edited_time: "2023-08-25T12:41:00.000Z",
      created_by: {
        object: "user",
        id: "some-id",
      },
      last_edited_by: {
        object: "user",
        id: "some-id",
      },
      has_children: false,
      archived: false,
      type: "heading_1",
      heading_1: {
        rich_text: [
          {
            type: "text",
            text: {
              content: "Simple heading",
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: "default",
            },
            plain_text: "Simple heading",
            href: null,
          },
        ],
        is_toggleable: false,
        color: "default",
      },
    },
    {
      object: "block",
      id: "6d332277-3200-4172-a33c-e3b221e7ea25",
      parent: {
        type: "block_id",
        block_id: "3a0962d9-7ef6-47d5-b133-95a932dd6988",
      },
      created_time: "2023-08-25T12:24:00.000Z",
      last_edited_time: "2023-08-25T12:28:00.000Z",
      created_by: {
        object: "user",
        id: "e0940bd4-e334-4f81-8903-b417bb9ed978",
      },
      last_edited_by: {
        object: "user",
        id: "e0940bd4-e334-4f81-8903-b417bb9ed978",
      },
      has_children: false,
      archived: false,
      type: "table_row",
      table_row: {
        cells: [
          [
            {
              type: "text",
              text: {
                content: "Year",
                link: null,
              },
              annotations: {
                bold: true,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Year",
              href: null,
            },
          ],
          [
            {
              type: "text",
              text: {
                content: "Month",
                link: null,
              },
              annotations: {
                bold: true,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Month",
              href: null,
            },
          ],
          [
            {
              type: "text",
              text: {
                content: "Day",
                link: null,
              },
              annotations: {
                bold: true,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Day",
              href: null,
            },
          ],
        ],
      },
    },
    {
      object: "block",
      id: "6d332277-3200-4172-a33c-e3b221e7ea25",
      parent: {
        type: "block_id",
        block_id: "3a0962d9-7ef6-47d5-b133-95a932dd6988",
      },
      created_time: "2023-08-25T12:24:00.000Z",
      last_edited_time: "2023-08-25T12:28:00.000Z",
      created_by: {
        object: "user",
        id: "e0940bd4-e334-4f81-8903-b417bb9ed978",
      },
      last_edited_by: {
        object: "user",
        id: "e0940bd4-e334-4f81-8903-b417bb9ed978",
      },
      has_children: false,
      archived: false,
      type: "table_row",
      table_row: {
        cells: [
          [
            {
              type: "text",
              text: {
                content: "2023",
                link: null,
              },
              annotations: {
                bold: true,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "2023",
              href: null,
            },
          ],
          [
            {
              type: "text",
              text: {
                content: "Feb",
                link: null,
              },
              annotations: {
                bold: true,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Feb",
              href: null,
            },
          ],
          [
            {
              type: "text",
              text: {
                content: "11",
                link: null,
              },
              annotations: {
                bold: true,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "11",
              href: null,
            },
          ],
        ],
      },
    },
    {
      object: "block",
      id: "6d332277-3200-4172-a33c-e3b221e7ea25",
      parent: {
        type: "block_id",
        block_id: "3a0962d9-7ef6-47d5-b133-95a932dd6988",
      },
      created_time: "2023-08-25T12:24:00.000Z",
      last_edited_time: "2023-08-25T12:28:00.000Z",
      created_by: {
        object: "user",
        id: "e0940bd4-e334-4f81-8903-b417bb9ed978",
      },
      last_edited_by: {
        object: "user",
        id: "e0940bd4-e334-4f81-8903-b417bb9ed978",
      },
      has_children: false,
      archived: false,
      type: "table_row",
      table_row: {
        cells: [
          [
            {
              type: "text",
              text: {
                content: "2023",
                link: null,
              },
              annotations: {
                bold: true,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "2023",
              href: null,
            },
          ],
          [
            {
              type: "text",
              text: {
                content: "Feb",
                link: null,
              },
              annotations: {
                bold: true,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Feb",
              href: null,
            },
          ],
          [
            {
              type: "text",
              text: {
                content: "12",
                link: null,
              },
              annotations: {
                bold: true,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "12",
              href: null,
            },
          ],
        ],
      },
    },
  ]);

  expect(result).toBe(
    "\n\n## Simple heading\n\n| **Year** | **Month** | **Day** |\n| --- | --- | --- |\n| **2023** | **Feb** | **11** |\n| **2023** | **Feb** | **12** |"
  );
});
