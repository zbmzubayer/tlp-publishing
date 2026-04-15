import Anthropic from "@anthropic-ai/sdk";

export async function claude(content: string) {
  const anthropic = new Anthropic();

  const prompt = `
    Build a complete, self-contained static HTML webpage based on these details:
    ${content}

    Requirements:
    - Return ONLY the full markup (HTML, Body etc.). No markdown, no backticks, no explanation.
    - Include all CSS inline in a <style> tag inside <head>.
    - Make it visually polished and modern.
    - The page must work standalone with no external dependencies.
  `;

  // const msg = await anthropic.messages.create({
  //   model: "claude-sonnet-4-6",
  //   max_tokens: 40 * 1000,
  //   messages: [{ role: "user", content: prompt }],
  // });

  // console.log("Claude response:", msg);
  // console.log("Claude response stringified:", JSON.stringify(msg));

  // const html = msg.content[0].type === "text" ? msg.content[0].text : "";

  let fullHtml = "";

  const stream = anthropic.messages.stream({
    model: "claude-sonnet-4-6",
    max_tokens: 40 * 1000,
    messages: [{ role: "user", content: prompt }],
  });

  for await (const chunk of stream) {
    if (chunk.type === "content_block_delta" && chunk.delta.type === "text_delta") {
      fullHtml += chunk.delta.text;
    }
  }

  return fullHtml;
}
