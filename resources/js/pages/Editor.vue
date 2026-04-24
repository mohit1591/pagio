<template>
  <div class="flex flex-col h-screen">

    <!-- 🔥 TOP BAR -->
    <div class="flex justify-between items-center bg-black text-white px-4 py-2">
      <h1 class="text-lg font-bold">Mini Elementor 🚀</h1>
      <button @click="saveTemplate" class="bg-green-500 px-4 py-1 rounded">
        Save
      </button>
    </div>

    <div class="flex flex-1 overflow-hidden">

      <!-- 🔹 LEFT PANEL (Blocks) -->
      <div id="blocks" class="w-1/5 bg-gray-100 p-2 overflow-y-auto"></div>

      <!-- 🔹 CENTER (Editor Canvas) -->
      <div id="gjs" class="w-3/5"></div>

      <!-- 🔹 RIGHT PANEL (Styles) -->
      <div id="style-panel" class="w-1/5 bg-gray-50 p-2 overflow-y-auto"></div>

    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import preset from "grapesjs-preset-webpage";

let editor = null;

onMounted(() => {
  editor = grapesjs.init({
    container: "#gjs",
    height: "100%",
    fromElement: false,

    plugins: [preset],

    blockManager: {
      appendTo: "#blocks"
    },

    styleManager: {
      appendTo: "#style-panel",
      sectors: [
        {
          name: "General",
          open: true,
          properties: [
            "width",
            "height",
            "padding",
            "margin",
            "background-color"
          ]
        },
        {
          name: "Typography",
          properties: [
            "font-size",
            "color",
            "font-weight",
            "text-align"
          ]
        }
      ]
    },

    storageManager: false,
  });

  // 🔥 CUSTOM BLOCKS (Elementor style)
  editor.BlockManager.add("hero", {
    label: "Hero",
    category: "Sections",
    content: `
      <section style="padding:60px; text-align:center; background:#111; color:#fff">
        <h1>Hero Title</h1>
        <p>Subtitle here</p>
        <button style="padding:10px 20px;">Click Me</button>
      </section>
    `
  });

  editor.BlockManager.add("text", {
    label: "Text",
    category: "Basic",
    content: `<p>Editable text here</p>`
  });

  editor.BlockManager.add("image", {
    label: "Image",
    category: "Basic",
    content: `<img src="https://via.placeholder.com/300" />`
  });

  editor.BlockManager.add("pricing", {
    label: "Pricing",
    category: "Sections",
    content: `
      <section style="padding:40px">
        <h2>Pricing</h2>
        <div style="display:flex; gap:20px">
          <div style="border:1px solid #ddd; padding:20px">Basic</div>
          <div style="border:1px solid #ddd; padding:20px">Pro</div>
        </div>
      </section>
    `
  });
});

// 🔥 SAVE FUNCTION
const saveTemplate = async () => {
  const html = editor.getHtml();
  const css = editor.getCss();

  await fetch("/save-template", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-TOKEN": document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content"),
    },
    body: JSON.stringify({ html, css }),
  });

  alert("Saved Successfully 🚀");
};
</script>