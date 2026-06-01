<template>
  <div class="flex flex-col h-screen font-sans">

    <!-- TOP BAR -->
    <div class="flex justify-between items-center px-4 bg-[#1a2535] text-white shadow-lg z-50 h-[42px]">
      <div class="flex items-center gap-2">
        <button class="top-icon-btn" title="Home">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </button>
        <button class="edit-mode-btn flex items-center gap-1.5">
          <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          Edit mode
        </button>
        <button class="top-icon-btn" title="Menu">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <button class="top-text-btn font-medium">Overview</button>
        <div class="text-[11px] text-[#8a9bb5]">
          Website domain <span class="text-[#cdd5e0]">{{ siteUrl }}</span>
        </div>
      </div>
      <div class="flex items-center gap-1">
        <button @click="setDevice('desktop')" :class="['device-btn', activeDevice==='desktop' ? 'text-white' : 'text-[#8a9bb5]']" title="Desktop">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </button>
        <button @click="setDevice('tablet')" :class="['device-btn', activeDevice==='tablet' ? 'text-white' : 'text-[#8a9bb5]']" title="Tablet">
          <svg width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
        </button>
        <button @click="setDevice('mobile')" :class="['device-btn', activeDevice==='mobile' ? 'text-white' : 'text-[#8a9bb5]']" title="Mobile">
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
        </button>
      </div>
    </div>

    <!-- GREEN TOOLBAR -->
    <div class="flex items-center px-2 gap-1 bg-[#2dc08a] h-[40px] shrink-0">
      <button
        v-for="tab in ['Elements','Layers','Settings']"
        :key="tab"
        @click="activeTab = tab"
        :class="['tb-btn', activeTab === tab ? 'tb-btn-active' : '']"
      >
        <span v-if="tab==='Elements'">
          <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="inline align-[-2px] mr-1"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
        </span>
        <span v-if="tab==='Layers'">
          <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="inline align-[-2px] mr-1"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
        </span>
        <span v-if="tab==='Settings'">
          <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="inline align-[-2px] mr-1"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
        </span>
        {{ tab }}
      </button>

      <div class="tb-sep"></div>

      <button class="tb-btn tb-btn-muted">
        <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="inline align-[-2px] mr-1"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
        axo
        <svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="inline align-[-1px] ml-0.5"><polyline points="6 9 12 15 18 9"/></svg>
      </button>

      <div class="tb-sep"></div>

      <button @click="undoAction" class="tb-btn tb-btn-muted">
        <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="inline align-[-2px] mr-1"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.77"/></svg>
        Undo
      </button>
      <button @click="redoAction" class="tb-btn tb-btn-muted opacity-50">
        <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="inline align-[-2px] mr-1"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-.49-3.77"/></svg>
        Redo
        <svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="inline align-[-1px] ml-0.5 opacity-60"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.77"/></svg>
      </button>

      <div class="flex-1"></div>

      <button @click="previewTemplate" class="tb-btn tb-btn-muted">
        <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="inline align-[-2px] mr-1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        Preview
      </button>

      <button @click="saveTemplate" class="tb-btn tb-btn-save">
        <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="inline align-[-2px] mr-1"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
        Save changes
      </button>

      <button class="tb-btn tb-btn-report">
        <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="inline align-[-2px] mr-1"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        Report issue
      </button>
    </div>

    <div class="flex flex-1 overflow-hidden">

      <!-- LEFT PANEL: Elements / Layers / Settings -->
      <div class="w-[205px] bg-white flex flex-col overflow-hidden shrink-0 border-r border-[#e5e8ed]">
        <div class="px-3 pt-2.5 pb-2 border-b border-[#e5e8ed]">
          <div class="text-[13px] font-bold text-[#1a2535] mb-0.5">
            <template v-if="activeTab==='Elements'">Elements</template>
            <template v-if="activeTab==='Layers'">Layers</template>
            <template v-if="activeTab==='Settings'">Settings</template>
          </div>
          <div v-if="activeTab==='Elements'" class="text-[10px] text-[#8a9bb5] leading-snug">
            To add an element, drag it to the column you want to place it in
          </div>
        </div>

        <div class="flex-1 overflow-y-auto">
          <div v-show="activeTab === 'Elements'">
            <div id="blocks" class="p-1.5"></div>
          </div>
          <div v-show="activeTab === 'Layers'">
            <div id="layers-panel" class="p-2"></div>
          </div>
          <div v-show="activeTab === 'Settings'">
            <div id="trait-panel" class="p-2"></div>
          </div>
        </div>
      </div>

      <!-- CENTER CANVAS -->
      <div class="flex-1 flex flex-col overflow-hidden bg-[#f0f2f5]">
        <!-- Canvas device sub-bar -->
        <div class="flex items-center justify-between px-3 py-1.5 gap-3 bg-[#1a2535] text-[#8a9bb5] h-[32px] shrink-0 text-xs">
          <div class="flex gap-1">
            <button @click="setDevice('desktop')" :class="['canvas-dev-btn', activeDevice==='desktop' ? 'canvas-dev-active' : '']">
              <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="inline align-[-1px] mr-0.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              Desktop
            </button>
            <button @click="setDevice('tablet')" :class="['canvas-dev-btn', activeDevice==='tablet' ? 'canvas-dev-active' : '']">
              <svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="inline align-[-1px] mr-0.5"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              Tablet
            </button>
            <button @click="setDevice('mobile')" :class="['canvas-dev-btn', activeDevice==='mobile' ? 'canvas-dev-active' : '']">
              <svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="inline align-[-1px] mr-0.5"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              Mobile
            </button>
          </div>
          <div class="text-[#5a6b80] italic text-[11px]">Drag blocks from the left panel onto the canvas</div>
          <div class="flex gap-1">
            <button @click="toggleBorders" class="canvas-dev-btn">⬜ Borders</button>
            <button @click="toggleFullscreen" class="canvas-dev-btn">⛶ Fullscreen</button>
          </div>
        </div>
        <div id="gjs" class="flex-1 overflow-auto"></div>
      </div>

      <!-- RIGHT PANEL: Style / CSS -->
      <div class="w-[255px] flex flex-col overflow-hidden shrink-0 bg-[#1a2535] border-l border-white/[0.06]">
        <div class="flex border-b border-white/[0.08]">
          <button
            v-for="tab in ['Style','CSS']"
            :key="tab"
            @click="rightTab = tab"
            :class="['flex-1 text-xs py-2 font-semibold transition bg-transparent',
              rightTab === tab
                ? 'text-[#2dc08a] border-b-2 border-[#2dc08a]'
                : 'text-[#8a9bb5] hover:text-white']"
          >{{ tab }}</button>
        </div>
        <div class="flex-1 overflow-y-auto">
          <div v-show="rightTab === 'Style'">
            <div id="style-panel" class="p-1"></div>
          </div>
          <div v-show="rightTab === 'CSS'" class="p-3">
            <div class="text-xs mb-2 text-[#8a9bb5]">Custom CSS</div>
            <textarea
              v-model="customCss"
              @input="applyCustomCss"
              rows="22"
              class="w-full text-[11.5px] font-mono p-2 rounded resize-none focus:outline-none bg-[#0f1c2e] text-[#4ec9d4] border border-white/[0.08]"
              placeholder="/* Add custom CSS here */&#10;.my-class {&#10;  color: red;&#10;}"
            ></textarea>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import preset from "grapesjs-preset-webpage";


let editor = null;
const props = defineProps({
  site: Object
})
const activeTab   = ref("Elements");
const rightTab    = ref("Style");
const activeDevice = ref("desktop");
const customCss   = ref("");
const siteUrl     = ref("http://axo.pagio.co.uk");

// ─── DEVICE SWITCH ────────────────────────────────────────────────────────────
const setDevice = (device) => {
  activeDevice.value = device;
  const map = { desktop: "Desktop", tablet: "Tablet", mobile: "Mobile portrait" };
  editor?.setDevice(map[device]);
};

// ─── ACTIONS ──────────────────────────────────────────────────────────────────
const undoAction       = () => editor?.UndoManager.undo();
const redoAction       = () => editor?.UndoManager.redo();
const clearCanvas      = () => { if (confirm("Clear canvas?")) editor?.runCommand("core:canvas-clear"); };
const toggleBorders    = () => editor?.runCommand("sw-visibility");
const toggleFullscreen = () => editor?.runCommand("fullscreen", { target: "#gjs" });

const previewTemplate = () => {
  const html = editor?.getHtml();
  const css  = editor?.getCss();
  const win  = window.open("", "_blank");
  win.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${css}</style></head><body>${html}</body></html>`);
  win.document.close();
};

const applyCustomCss = () => {
  if (!editor) return;
  const existing = editor.getCss().replace(/\/\*custom\*\/[\s\S]*$/, "");
  editor.setStyle(existing + `/*custom*/${customCss.value}`);
};

const saveTemplate = async () => {
  try {
    const html = editor.getHtml();
    const css  = editor.getCss();

    const res = await fetch(`/save-site/${props.site.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content'),
      },
      body: JSON.stringify({ html, css }),
    });

    if (!res.ok) throw new Error(`Server error ${res.status}`);
    alert('Website saved successfully!');
  } catch (err) {
    alert('Save failed — ' + err.message);
  }
};

// ─── BLOCK DEFINITIONS ────────────────────────────────────────────────────────
const BLOCKS = [
  // ── LAYOUT ──────────────────────────────────────────────────────────────────
  {
    id: "container",
    label: "Container",
    category: "Layout",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="18" rx="2"/></svg>`,
    content: `<div class="gf-container" style="max-width:1200px;margin:0 auto;padding:0 20px;width:100%"></div>`,
  },
  {
    id: "section",
    label: "Section",
    category: "Layout",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="1"/></svg>`,
    content: `<section style="padding:60px 20px;width:100%;box-sizing:border-box"></section>`,
  },
  {
    id: "grid-2",
    label: "2 Columns",
    category: "Layout",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="2" y="4" width="9" height="16" rx="1"/><rect x="13" y="4" width="9" height="16" rx="1"/></svg>`,
    content: `<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;padding:20px">
      <div style="padding:20px;background:#f8f9fa;border-radius:8px;min-height:100px">Column 1</div>
      <div style="padding:20px;background:#f8f9fa;border-radius:8px;min-height:100px">Column 2</div>
    </div>`,
  },
  {
    id: "grid-3",
    label: "3 Columns",
    category: "Layout",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="1" y="4" width="6" height="16" rx="1"/><rect x="9" y="4" width="6" height="16" rx="1"/><rect x="17" y="4" width="6" height="16" rx="1"/></svg>`,
    content: `<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;padding:20px">
      <div style="padding:20px;background:#f8f9fa;border-radius:8px;min-height:100px">Column 1</div>
      <div style="padding:20px;background:#f8f9fa;border-radius:8px;min-height:100px">Column 2</div>
      <div style="padding:20px;background:#f8f9fa;border-radius:8px;min-height:100px">Column 3</div>
    </div>`,
  },
  {
    id: "grid-4",
    label: "4 Columns",
    category: "Layout",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="1" y="5" width="4.5" height="14" rx="1"/><rect x="6.5" y="5" width="4.5" height="14" rx="1"/><rect x="13" y="5" width="4.5" height="14" rx="1"/><rect x="18.5" y="5" width="4.5" height="14" rx="1"/></svg>`,
    content: `<div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:20px;padding:20px">
      <div style="padding:20px;background:#f8f9fa;border-radius:8px;min-height:80px">Col 1</div>
      <div style="padding:20px;background:#f8f9fa;border-radius:8px;min-height:80px">Col 2</div>
      <div style="padding:20px;background:#f8f9fa;border-radius:8px;min-height:80px">Col 3</div>
      <div style="padding:20px;background:#f8f9fa;border-radius:8px;min-height:80px">Col 4</div>
    </div>`,
  },
  {
    id: "flexbox",
    label: "Flexbox Row",
    category: "Layout",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="1" y="6" width="6" height="12" rx="1"/><rect x="9" y="6" width="6" height="12" rx="1"/><rect x="17" y="6" width="6" height="12" rx="1"/><line x1="7" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="17" y2="12"/></svg>`,
    content: `<div style="display:flex;flex-wrap:wrap;gap:16px;padding:20px;align-items:center;justify-content:center">
      <div style="padding:20px;background:#f8f9fa;border-radius:8px;flex:1;min-width:200px">Item 1</div>
      <div style="padding:20px;background:#f8f9fa;border-radius:8px;flex:1;min-width:200px">Item 2</div>
      <div style="padding:20px;background:#f8f9fa;border-radius:8px;flex:1;min-width:200px">Item 3</div>
    </div>`,
  },
  {
    id: "spacer",
    label: "Spacer",
    category: "Layout",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><line x1="12" y1="3" x2="12" y2="21"/><line x1="4" y1="3" x2="20" y2="3"/><line x1="4" y1="21" x2="20" y2="21"/></svg>`,
    content: `<div style="height:60px;width:100%"></div>`,
  },
  {
    id: "divider",
    label: "Separator",
    category: "Layout",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><line x1="2" y1="12" x2="22" y2="12"/></svg>`,
    content: `<hr style="border:none;border-top:2px solid #e0e0e0;margin:30px 20px;">`,
  },

  // ── TYPOGRAPHY ───────────────────────────────────────────────────────────────
  {
    id: "heading-1",
    label: "Title",
    category: "Typography",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>`,
    content: `<h1 style="font-size:48px;font-weight:800;color:#1a2535;line-height:1.2;margin:0 0 16px">Page Heading</h1>`,
  },
  {
    id: "heading-2",
    label: "H2 Heading",
    category: "Typography",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M4 4v7m0 0v9m0-9h8m0-7v7m0 0v9"/></svg>`,
    content: `<h2 style="font-size:36px;font-weight:700;color:#1a2535;line-height:1.3;margin:0 0 12px">Section Heading</h2>`,
  },
  {
    id: "paragraph",
    label: "Text",
    category: "Typography",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="15" y2="18"/></svg>`,
    content: `<p style="font-size:16px;line-height:1.7;color:#555;margin:0 0 16px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`,
  },
  {
    id: "blockquote",
    label: "Blockquote",
    category: "Typography",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>`,
    content: `<blockquote style="border-left:4px solid #2dc08a;padding:16px 24px;margin:20px 0;background:#f0fbf6;font-style:italic;font-size:18px;color:#333;border-radius:0 8px 8px 0">
      "Great design is not just what it looks like — it's how it works."
      <cite style="display:block;margin-top:8px;font-size:13px;color:#888;font-style:normal">— Someone Wise</cite>
    </blockquote>`,
  },
  {
    id: "label",
    label: "Badge",
    category: "Typography",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="5"/><path d="M7 12h10"/></svg>`,
    content: `<span style="display:inline-block;background:#2dc08a;color:#fff;font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;letter-spacing:1px;text-transform:uppercase">Label</span>`,
  },

  // ── MEDIA ────────────────────────────────────────────────────────────────────
  {
    id: "image",
    label: "Image",
    category: "Media",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
    content: `<img src="https://picsum.photos/800/400?random=1" alt="Image" style="width:100%;height:auto;display:block;border-radius:8px;" />`,
  },
  {
    id: "image-rounded",
    label: "Round Image",
    category: "Media",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M6.168 18.849A4 4 0 0 1 10 16h4a4 4 0 0 1 3.834 2.855"/></svg>`,
    content: `<img src="https://picsum.photos/200/200?random=2" alt="Avatar" style="width:150px;height:150px;border-radius:50%;object-fit:cover;display:block;margin:0 auto;" />`,
  },
  {
    id: "video-embed",
    label: "Video",
    category: "Media",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`,
    content: `<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px">
      <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"
        allowfullscreen></iframe>
    </div>`,
  },
  {
    id: "icon-box",
    label: "Icon Box",
    category: "Media",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    content: `<div style="text-align:center;padding:30px 20px">
      <div style="font-size:48px;margin-bottom:16px">⚡</div>
      <h3 style="font-size:20px;font-weight:700;margin:0 0 10px;color:#1a2535">Feature Title</h3>
      <p style="font-size:14px;color:#666;line-height:1.6;margin:0">Short description of this feature or benefit goes here.</p>
    </div>`,
  },

  // ── ELEMENTS ─────────────────────────────────────────────────────────────────
  {
    id: "btn-primary",
    label: "Buttons",
    category: "Elements",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="3"/><line x1="12" y1="11" x2="12" y2="13"/><line x1="10" y1="12" x2="14" y2="12"/></svg>`,
    content: `<a href="#" style="display:inline-block;background:#2dc08a;color:#fff;padding:14px 32px;border-radius:8px;font-size:16px;font-weight:700;text-decoration:none;letter-spacing:0.5px">Get Started →</a>`,
  },
  {
    id: "btn-secondary",
    label: "Outline Button",
    category: "Elements",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="3"/></svg>`,
    content: `<a href="#" style="display:inline-block;background:transparent;color:#2dc08a;padding:13px 31px;border-radius:8px;font-size:16px;font-weight:700;text-decoration:none;border:2px solid #2dc08a">Learn More</a>`,
  },
  {
    id: "btn-group",
    label: "Button Group",
    category: "Elements",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="1" y="8" width="10" height="8" rx="2"/><rect x="13" y="8" width="10" height="8" rx="2"/></svg>`,
    content: `<div style="display:flex;gap:12px;flex-wrap:wrap;padding:16px">
      <a href="#" style="display:inline-block;background:#2dc08a;color:#fff;padding:12px 28px;border-radius:8px;font-size:15px;font-weight:700;text-decoration:none">Primary</a>
      <a href="#" style="display:inline-block;background:transparent;color:#2dc08a;padding:11px 27px;border-radius:8px;font-size:15px;font-weight:700;text-decoration:none;border:2px solid #2dc08a">Secondary</a>
    </div>`,
  },

  // ── SECTIONS ─────────────────────────────────────────────────────────────────
  {
    id: "hero",
    label: "Hero Section",
    category: "Sections",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="18" rx="2"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="10" y1="9" x2="14" y2="9"/><line x1="10" y1="15" x2="14" y2="15"/></svg>`,
    content: `<section style="padding:100px 40px;text-align:center;background:linear-gradient(135deg,#1a2535 0%,#16213e 50%,#0f3460 100%);color:#fff">
      <span style="display:inline-block;background:#2dc08a;color:#fff;font-size:11px;font-weight:700;padding:4px 14px;border-radius:20px;letter-spacing:2px;text-transform:uppercase;margin-bottom:24px">✦ New Launch</span>
      <h1 style="font-size:60px;font-weight:900;line-height:1.1;margin:0 0 20px;max-width:800px;margin-left:auto;margin-right:auto">Build Stunning<br><span style="color:#2dc08a">Websites Faster</span></h1>
      <p style="font-size:20px;color:rgba(255,255,255,0.7);max-width:600px;margin:0 auto 40px;line-height:1.6">The visual page builder that gives you full control without writing a single line of code.</p>
      <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
        <a href="#" style="background:#2dc08a;color:#fff;padding:16px 40px;border-radius:8px;font-size:17px;font-weight:700;text-decoration:none">Get Started Free →</a>
        <a href="#" style="background:rgba(255,255,255,0.1);color:#fff;padding:15px 39px;border-radius:8px;font-size:17px;font-weight:600;text-decoration:none;border:1px solid rgba(255,255,255,0.2)">Watch Demo ▶</a>
      </div>
    </section>`,
  },
  {
    id: "features",
    label: "Features Grid",
    category: "Sections",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
    content: `<section style="padding:80px 40px;background:#fff">
      <div style="text-align:center;margin-bottom:60px">
        <span style="display:inline-block;background:#2dc08a;color:#fff;font-size:11px;font-weight:700;padding:4px 14px;border-radius:20px;letter-spacing:2px;text-transform:uppercase;margin-bottom:16px">Features</span>
        <h2 style="font-size:40px;font-weight:800;color:#1a2535;margin:0 0 16px">Why Choose Us?</h2>
        <p style="font-size:17px;color:#666;max-width:550px;margin:0 auto">Everything you need to build world-class digital products.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:32px;max-width:1100px;margin:0 auto">
        ${["⚡ Fast Performance","🔒 Secure","📱 Responsive","🎨 Customizable","☁️ Cloud Hosted","📊 Analytics"].map(f => `
        <div style="text-align:center;padding:40px 24px;background:#f9fafb;border-radius:16px">
          <div style="font-size:44px;margin-bottom:18px">${f.split(" ")[0]}</div>
          <h3 style="font-size:18px;font-weight:700;color:#1a2535;margin:0 0 10px">${f.split(" ").slice(1).join(" ")}</h3>
          <p style="font-size:14px;color:#888;line-height:1.6;margin:0">Short feature description highlighting the key benefit.</p>
        </div>`).join("")}
      </div>
    </section>`,
  },
  {
    id: "pricing",
    label: "Pricing",
    category: "Sections",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    content: `<section style="padding:80px 40px;background:#f9fafb">
      <div style="text-align:center;margin-bottom:60px">
        <h2 style="font-size:42px;font-weight:900;color:#1a2535;margin:0 0 12px">Simple Pricing</h2>
        <p style="font-size:17px;color:#666">No hidden fees. Cancel anytime.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:960px;margin:0 auto">
        <div style="background:#fff;border-radius:16px;padding:40px 32px;box-shadow:0 2px 20px rgba(0,0,0,0.06);border:2px solid transparent">
          <div style="font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#888;margin-bottom:8px">Starter</div>
          <div style="font-size:48px;font-weight:900;color:#1a2535;margin-bottom:4px">$9<span style="font-size:18px;color:#888">/mo</span></div>
          ${["5 Projects","10GB Storage","Basic Analytics","Email Support"].map(f=>`<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;font-size:14px;color:#444"><span style="color:#2dc08a">✓</span>${f}</div>`).join("")}
          <a href="#" style="display:block;text-align:center;background:#f3f4f6;color:#1a2535;padding:13px;border-radius:8px;font-weight:700;text-decoration:none;margin-top:24px">Get Started</a>
        </div>
        <div style="background:#1a2535;border-radius:16px;padding:40px 32px;border:2px solid #2dc08a;transform:scale(1.04)">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <div style="font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#2dc08a">Pro</div>
            <span style="background:#2dc08a;color:#fff;font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px">POPULAR</span>
          </div>
          <div style="font-size:48px;font-weight:900;color:#fff;margin-bottom:4px">$29<span style="font-size:18px;color:rgba(255,255,255,0.5)">/mo</span></div>
          ${["Unlimited Projects","100GB Storage","Advanced Analytics","Priority Support","Custom Domain"].map(f=>`<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;font-size:14px;color:rgba(255,255,255,0.8)"><span style="color:#2dc08a">✓</span>${f}</div>`).join("")}
          <a href="#" style="display:block;text-align:center;background:#2dc08a;color:#fff;padding:13px;border-radius:8px;font-weight:700;text-decoration:none;margin-top:24px">Get Started</a>
        </div>
        <div style="background:#fff;border-radius:16px;padding:40px 32px;box-shadow:0 2px 20px rgba(0,0,0,0.06);border:2px solid transparent">
          <div style="font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#888;margin-bottom:8px">Enterprise</div>
          <div style="font-size:48px;font-weight:900;color:#1a2535;margin-bottom:4px">$99<span style="font-size:18px;color:#888">/mo</span></div>
          ${["Everything in Pro","Unlimited Storage","White Labeling","SLA 99.9%","Dedicated Support"].map(f=>`<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;font-size:14px;color:#444"><span style="color:#2dc08a">✓</span>${f}</div>`).join("")}
          <a href="#" style="display:block;text-align:center;background:#f3f4f6;color:#1a2535;padding:13px;border-radius:8px;font-weight:700;text-decoration:none;margin-top:24px">Contact Sales</a>
        </div>
      </div>
    </section>`,
  },
  {
    id: "testimonials",
    label: "Testimonials",
    category: "Sections",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    content: `<section style="padding:80px 40px;background:#1a2535">
      <div style="text-align:center;margin-bottom:60px">
        <h2 style="font-size:40px;font-weight:800;color:#fff;margin:0 0 12px">What Our Customers Say</h2>
        <p style="font-size:17px;color:rgba(255,255,255,0.5)">Real feedback from real users</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1100px;margin:0 auto">
        ${[
          ["Sarah K.","Designer","This tool changed the way I build websites. So intuitive!"],
          ["Mike R.","Developer","Finally a builder that gives me clean code. Love it."],
          ["Priya M.","Marketer","Our landing pages convert 3x better since switching."],
        ].map(([name, role, quote]) => `
        <div style="background:rgba(255,255,255,0.05);border-radius:16px;padding:32px;border:1px solid rgba(255,255,255,0.1)">
          <div style="font-size:18px;margin-bottom:12px;color:#2dc08a">★★★★★</div>
          <p style="font-size:15px;color:rgba(255,255,255,0.8);line-height:1.7;margin:0 0 20px;font-style:italic">"${quote}"</p>
          <div style="display:flex;align-items:center;gap:12px">
            <div style="width:40px;height:40px;border-radius:50%;background:#2dc08a;display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;font-size:16px">${name[0]}</div>
            <div>
              <div style="font-weight:700;color:#fff;font-size:14px">${name}</div>
              <div style="font-size:12px;color:rgba(255,255,255,0.4)">${role}</div>
            </div>
          </div>
        </div>`).join("")}
      </div>
    </section>`,
  },
  {
    id: "stats",
    label: "Stats Counter",
    category: "Sections",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    content: `<section style="padding:60px 40px;background:linear-gradient(135deg,#2dc08a,#1d9e75)">
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px;max-width:900px;margin:0 auto;text-align:center">
        ${[["10K+","Happy Customers"],["99.9%","Uptime SLA"],["150+","Countries"],["24/7","Support"]].map(([n, l]) => `
        <div>
          <div style="font-size:48px;font-weight:900;color:#fff">${n}</div>
          <div style="font-size:14px;color:rgba(255,255,255,0.8);text-transform:uppercase;letter-spacing:1px;margin-top:6px">${l}</div>
        </div>`).join("")}
      </div>
    </section>`,
  },
  {
    id: "cta",
    label: "Call to Action",
    category: "Sections",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    content: `<section style="padding:80px 40px;text-align:center;background:#1a2535">
      <h2 style="font-size:44px;font-weight:900;color:#fff;margin:0 0 16px">Ready to Get Started?</h2>
      <p style="font-size:18px;color:rgba(255,255,255,0.6);max-width:500px;margin:0 auto 36px">Join thousands of designers and developers who love PageForge.</p>
      <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
        <a href="#" style="background:#2dc08a;color:#fff;padding:16px 44px;border-radius:8px;font-size:17px;font-weight:700;text-decoration:none">Start Free Trial →</a>
        <a href="#" style="background:transparent;color:#fff;padding:15px 43px;border-radius:8px;font-size:17px;font-weight:600;text-decoration:none;border:1px solid rgba(255,255,255,0.3)">Talk to Sales</a>
      </div>
    </section>`,
  },
  {
    id: "contact",
    label: "Contact Section",
    category: "Sections",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    content: `<section style="padding:80px 40px;background:#fff">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:60px;max-width:1000px;margin:0 auto">
        <div>
          <h2 style="font-size:38px;font-weight:800;color:#1a2535;margin:0 0 16px">Get In Touch</h2>
          <p style="font-size:16px;color:#666;line-height:1.7;margin:0 0 32px">Have questions? We'd love to hear from you.</p>
          <div style="display:flex;flex-direction:column;gap:16px">
            <div style="display:flex;align-items:center;gap:12px;font-size:15px;color:#444">📧 <span>hello@example.com</span></div>
            <div style="display:flex;align-items:center;gap:12px;font-size:15px;color:#444">📞 <span>+1 (555) 000-0000</span></div>
            <div style="display:flex;align-items:center;gap:12px;font-size:15px;color:#444">📍 <span>123 Design St, San Francisco, CA</span></div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:16px">
          <input type="text" placeholder="Your Name" style="padding:14px 16px;border:2px solid #e5e7eb;border-radius:8px;font-size:15px;outline:none;width:100%;box-sizing:border-box">
          <input type="email" placeholder="Email Address" style="padding:14px 16px;border:2px solid #e5e7eb;border-radius:8px;font-size:15px;outline:none;width:100%;box-sizing:border-box">
          <textarea placeholder="Your message..." rows="5" style="padding:14px 16px;border:2px solid #e5e7eb;border-radius:8px;font-size:15px;outline:none;width:100%;box-sizing:border-box;resize:vertical"></textarea>
          <button style="background:#2dc08a;color:#fff;padding:15px;border-radius:8px;font-size:16px;font-weight:700;border:none;cursor:pointer">Send Message →</button>
        </div>
      </div>
    </section>`,
  },
  {
    id: "navbar",
    label: "Navbar",
    category: "Sections",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="4" rx="1"/><line x1="6" y1="11" x2="18" y2="11"/><line x1="6" y1="15" x2="18" y2="15"/><line x1="6" y1="19" x2="14" y2="19"/></svg>`,
    content: `<nav style="display:flex;justify-content:space-between;align-items:center;padding:16px 40px;background:#fff;box-shadow:0 2px 12px rgba(0,0,0,0.08);position:sticky;top:0;z-index:100">
      <div style="font-size:22px;font-weight:900;color:#1a2535">⚡ <span style="color:#2dc08a">Brand</span></div>
      <div style="display:flex;gap:32px">
        ${["Home","Features","Pricing","About","Contact"].map(l=>`<a href="#" style="color:#444;text-decoration:none;font-size:15px;font-weight:500">${l}</a>`).join("")}
      </div>
      <div style="display:flex;gap:12px">
        <a href="#" style="color:#444;padding:8px 20px;border-radius:6px;font-size:14px;font-weight:600;text-decoration:none">Login</a>
        <a href="#" style="background:#2dc08a;color:#fff;padding:8px 20px;border-radius:6px;font-size:14px;font-weight:700;text-decoration:none">Sign Up</a>
      </div>
    </nav>`,
  },
  {
    id: "footer",
    label: "Footer",
    category: "Sections",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="2" y="17" width="20" height="4" rx="1"/><line x1="6" y1="9" x2="18" y2="9"/><line x1="6" y1="13" x2="14" y2="13"/></svg>`,
    content: `<footer style="background:#1a2535;color:rgba(255,255,255,0.6);padding:60px 40px 30px">
      <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;max-width:1100px;margin:0 auto 50px">
        <div>
          <div style="font-size:22px;font-weight:900;color:#fff;margin-bottom:16px">⚡ <span style="color:#2dc08a">PageForge</span></div>
          <p style="font-size:14px;line-height:1.7;max-width:260px">The most powerful visual page builder for modern websites.</p>
        </div>
        ${[["Product",["Features","Pricing","Changelog","Roadmap"]],["Company",["About","Blog","Careers","Press"]],["Support",["Docs","Discord","Status","Contact"]]].map(([title, links]) => `
        <div>
          <div style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#4ec9d4;margin-bottom:16px">${title}</div>
          ${links.map(l=>`<a href="#" style="display:block;font-size:14px;color:rgba(255,255,255,0.5);text-decoration:none;margin-bottom:10px">${l}</a>`).join("")}
        </div>`).join("")}
      </div>
      <div style="border-top:1px solid rgba(255,255,255,0.1);padding-top:24px;max-width:1100px;margin:0 auto;display:flex;justify-content:space-between;font-size:13px">
        <span>© 2026 PageForge. All Rights Reserved</span>
        <div style="display:flex;gap:20px">
          <a href="#" style="color:rgba(255,255,255,0.4);text-decoration:none">Privacy</a>
          <a href="#" style="color:rgba(255,255,255,0.4);text-decoration:none">Terms</a>
          <a href="#" style="color:rgba(255,255,255,0.4);text-decoration:none">Cookies</a>
        </div>
      </div>
    </footer>`,
  },

  // ── CARDS ────────────────────────────────────────────────────────────────────
  {
    id: "card-basic",
    label: "Basic Card",
    category: "Cards",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="18" rx="2"/><line x1="2" y1="9" x2="22" y2="9"/></svg>`,
    content: `<div style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:340px">
      <img src="https://picsum.photos/340/200?random=50" alt="Card" style="width:100%;height:200px;object-fit:cover;display:block">
      <div style="padding:24px">
        <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#2dc08a">Category</span>
        <h3 style="font-size:20px;font-weight:700;color:#1a2535;margin:8px 0 12px">Card Title Here</h3>
        <p style="font-size:14px;color:#888;line-height:1.6;margin:0 0 20px">A brief description of the content inside this card.</p>
        <a href="#" style="font-size:14px;font-weight:700;color:#2dc08a;text-decoration:none">Read More →</a>
      </div>
    </div>`,
  },
  {
    id: "card-profile",
    label: "Profile Card",
    category: "Cards",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    content: `<div style="background:#fff;border-radius:20px;padding:40px 30px;text-align:center;box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:280px">
      <img src="https://picsum.photos/120/120?random=70" alt="Profile" style="width:90px;height:90px;border-radius:50%;object-fit:cover;margin:0 auto 16px;display:block;border:4px solid #f0fbf6;box-shadow:0 4px 12px rgba(0,0,0,0.15)">
      <h4 style="font-size:20px;font-weight:700;color:#1a2535;margin:0 0 4px">Alex Johnson</h4>
      <p style="font-size:13px;color:#2dc08a;font-weight:600;margin:0 0 16px">UI/UX Designer</p>
      <p style="font-size:13px;color:#999;line-height:1.5;margin:0 0 20px">Designing beautiful experiences that people love to use.</p>
      <a href="#" style="display:block;background:#2dc08a;color:#fff;padding:11px;border-radius:8px;font-size:14px;font-weight:700;text-decoration:none">Follow</a>
    </div>`,
  },
  {
    id: "card-grid-3",
    label: "Card Grid",
    category: "Cards",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="1" y="3" width="6" height="18" rx="1"/><rect x="9" y="3" width="6" height="18" rx="1"/><rect x="17" y="3" width="6" height="18" rx="1"/></svg>`,
    content: `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;padding:20px">
      ${[1,2,3].map(i => `
      <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,0.07)">
        <img src="https://picsum.photos/300/180?random=${i*11}" alt="" style="width:100%;height:160px;object-fit:cover;display:block">
        <div style="padding:20px">
          <h4 style="font-size:16px;font-weight:700;color:#1a2535;margin:0 0 8px">Card Title ${i}</h4>
          <p style="font-size:13px;color:#999;line-height:1.5;margin:0 0 14px">Short description for card ${i}.</p>
          <a href="#" style="font-size:13px;font-weight:700;color:#2dc08a;text-decoration:none">Read More →</a>
        </div>
      </div>`).join("")}
    </div>`,
  },

  // ── FORMS ────────────────────────────────────────────────────────────────────
  {
    id: "form-contact",
    label: "Contact Form",
    category: "Forms",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    content: `<div style="max-width:560px;margin:0 auto;padding:40px;background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,0.08)">
      <h3 style="font-size:26px;font-weight:800;color:#1a2535;margin:0 0 8px">Contact Us</h3>
      <p style="font-size:14px;color:#999;margin:0 0 28px">We'll get back to you within 24 hours.</p>
      <div style="display:flex;gap:16px;margin-bottom:16px">
        <div style="flex:1"><label style="display:block;font-size:13px;font-weight:600;color:#374151;margin-bottom:6px">First Name</label><input type="text" placeholder="John" style="width:100%;padding:12px 14px;border:2px solid #e5e7eb;border-radius:8px;font-size:14px;outline:none;box-sizing:border-box"></div>
        <div style="flex:1"><label style="display:block;font-size:13px;font-weight:600;color:#374151;margin-bottom:6px">Last Name</label><input type="text" placeholder="Doe" style="width:100%;padding:12px 14px;border:2px solid #e5e7eb;border-radius:8px;font-size:14px;outline:none;box-sizing:border-box"></div>
      </div>
      <div style="margin-bottom:16px"><label style="display:block;font-size:13px;font-weight:600;color:#374151;margin-bottom:6px">Email</label><input type="email" placeholder="john@example.com" style="width:100%;padding:12px 14px;border:2px solid #e5e7eb;border-radius:8px;font-size:14px;outline:none;box-sizing:border-box"></div>
      <div style="margin-bottom:24px"><label style="display:block;font-size:13px;font-weight:600;color:#374151;margin-bottom:6px">Message</label><textarea rows="5" placeholder="Write your message here..." style="width:100%;padding:12px 14px;border:2px solid #e5e7eb;border-radius:8px;font-size:14px;outline:none;box-sizing:border-box;resize:vertical"></textarea></div>
      <button style="width:100%;background:#2dc08a;color:#fff;padding:15px;border-radius:8px;font-size:16px;font-weight:700;border:none;cursor:pointer">Send Message →</button>
    </div>`,
  },
  {
    id: "form-newsletter",
    label: "Newsletter",
    category: "Forms",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    content: `<div style="background:linear-gradient(135deg,#1a2535,#0f3460);border-radius:16px;padding:50px 40px;text-align:center;max-width:600px;margin:0 auto">
      <h3 style="font-size:30px;font-weight:800;color:#fff;margin:0 0 10px">Stay in the Loop</h3>
      <p style="font-size:15px;color:rgba(255,255,255,0.6);margin:0 0 28px">Join 10,000+ subscribers. No spam, ever.</p>
      <div style="display:flex;gap:0;background:#fff;border-radius:10px;overflow:hidden;max-width:420px;margin:0 auto">
        <input type="email" placeholder="Your email address" style="flex:1;padding:14px 18px;border:none;font-size:14px;outline:none">
        <button style="background:#2dc08a;color:#fff;padding:14px 22px;border:none;cursor:pointer;font-size:14px;font-weight:700;white-space:nowrap">Subscribe →</button>
      </div>
    </div>`,
  },
  {
    id: "form-login",
    label: "Login Form",
    category: "Forms",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    content: `<div style="max-width:400px;margin:0 auto;padding:40px;background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,0.10)">
      <div style="text-align:center;margin-bottom:28px">
        <h3 style="font-size:24px;font-weight:800;color:#1a2535;margin:0 0 6px">Welcome Back</h3>
        <p style="font-size:14px;color:#999;margin:0">Sign in to your account</p>
      </div>
      <div style="margin-bottom:16px"><label style="display:block;font-size:13px;font-weight:600;color:#374151;margin-bottom:6px">Email</label><input type="email" placeholder="you@example.com" style="width:100%;padding:13px 14px;border:2px solid #e5e7eb;border-radius:8px;font-size:14px;outline:none;box-sizing:border-box"></div>
      <div style="margin-bottom:20px"><label style="display:block;font-size:13px;font-weight:600;color:#374151;margin-bottom:6px">Password</label><input type="password" placeholder="••••••••" style="width:100%;padding:13px 14px;border:2px solid #e5e7eb;border-radius:8px;font-size:14px;outline:none;box-sizing:border-box"></div>
      <div style="display:flex;justify-content:space-between;margin-bottom:24px;font-size:13px">
        <label style="display:flex;align-items:center;gap:6px;color:#555;cursor:pointer"><input type="checkbox"> Remember me</label>
        <a href="#" style="color:#2dc08a;text-decoration:none;font-weight:600">Forgot password?</a>
      </div>
      <button style="width:100%;background:#2dc08a;color:#fff;padding:15px;border-radius:8px;font-size:15px;font-weight:700;border:none;cursor:pointer">Sign In</button>
      <p style="text-align:center;font-size:13px;color:#999;margin:16px 0 0">Don't have an account? <a href="#" style="color:#2dc08a;font-weight:600;text-decoration:none">Sign up</a></p>
    </div>`,
  },
  {
    id: "search-bar",
    label: "Search Bar",
    category: "Forms",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    content: `<div style="max-width:600px;margin:0 auto;padding:20px">
      <div style="display:flex;background:#fff;border-radius:50px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.12)">
        <span style="padding:14px 18px;font-size:18px;color:#999">🔍</span>
        <input type="text" placeholder="Search anything..." style="flex:1;padding:14px 0;border:none;font-size:16px;outline:none">
        <button style="background:#2dc08a;color:#fff;padding:14px 28px;border:none;cursor:pointer;font-size:14px;font-weight:700;border-radius:0 50px 50px 0">Search</button>
      </div>
    </div>`,
  },

  // ── MISC ─────────────────────────────────────────────────────────────────────
  {
    id: "alert-info",
    label: "Info Alert",
    category: "Misc",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    content: `<div style="padding:16px 20px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;display:flex;gap:12px;align-items:flex-start">
      <span style="font-size:20px;flex-shrink:0">ℹ️</span>
      <div><strong style="color:#1d4ed8;font-size:14px">Info:</strong> <span style="font-size:14px;color:#3730a3">This is an informational message. You can dismiss it anytime.</span></div>
    </div>`,
  },
  {
    id: "alert-success",
    label: "Success Alert",
    category: "Misc",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    content: `<div style="padding:16px 20px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;display:flex;gap:12px;align-items:flex-start">
      <span style="font-size:20px;flex-shrink:0">✅</span>
      <div><strong style="color:#166534;font-size:14px">Success!</strong> <span style="font-size:14px;color:#15803d">Your changes have been saved successfully.</span></div>
    </div>`,
  },
  {
    id: "progress-bar",
    label: "Progress Bar",
    category: "Misc",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    content: `<div style="padding:20px">
      ${[["Design",90],["Development",75],["Marketing",60]].map(([label, pct]) => `
      <div style="margin-bottom:16px">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px">
          <span style="font-size:14px;font-weight:600;color:#333">${label}</span>
          <span style="font-size:13px;color:#888">${pct}%</span>
        </div>
        <div style="background:#f3f4f6;border-radius:50px;height:8px;overflow:hidden">
          <div style="background:linear-gradient(90deg,#2dc08a,#1d9e75);height:100%;border-radius:50px;width:${pct}%"></div>
        </div>
      </div>`).join("")}
    </div>`,
  },
  {
    id: "social-proof",
    label: "Social Proof",
    category: "Misc",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    content: `<div style="display:flex;align-items:center;gap:16px;padding:20px;background:#f9fafb;border-radius:12px;flex-wrap:wrap">
      <div style="display:flex">
        ${[1,2,3,4,5].map(i=>`<img src="https://picsum.photos/36/36?random=${i*13}" style="width:36px;height:36px;border-radius:50%;border:2px solid #fff;margin-left:${i===1?'0':'-10px'}">`).join("")}
      </div>
      <div>
        <div style="font-size:18px;font-weight:800;color:#2dc08a">★ 4.9/5</div>
        <div style="font-size:13px;color:#888">from 2,400+ reviews</div>
      </div>
      <div style="font-size:14px;color:#555;font-style:italic">"The best builder we've ever used!"</div>
    </div>`,
  },
  {
    id: "map-embed",
    label: "Map",
    category: "Misc",
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>`,
    content: `<div style="border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.1)">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v1"
        width="100%" height="350" style="border:0;display:block" allowfullscreen loading="lazy">
      </iframe>
    </div>`,
  },
];

// ─── INIT ─────────────────────────────────────────────────────────────────────
onMounted(() => {
  editor = grapesjs.init({
    container: "#gjs",
    height: "100%",
    fromElement: false,
    plugins: [preset],
    pluginsOpts: {
      [preset]: {
        blocks: [],
        modalImportTitle: "Import HTML",
      }
    },

    blockManager: { appendTo: "#blocks" },
    layerManager:  { appendTo: "#layers-panel" },
    traitManager:  { appendTo: "#trait-panel" },

    styleManager: {
      appendTo: "#style-panel",
      sectors: [
        { name: "Spacing",    open: true,  properties: ["margin","padding"] },
        { name: "Dimension",  open: false, properties: ["width","min-width","max-width","height","min-height","max-height"] },
        { name: "Typography", open: false, properties: ["font-family","font-size","font-weight","letter-spacing","line-height","color","text-align","text-decoration","text-shadow"] },
        { name: "Background", open: false, properties: ["background-color","background-image","background-size","background-position","background-repeat"] },
        { name: "Border",     open: false, properties: ["border","border-radius","border-color","border-style","border-width"] },
        { name: "Layout",     open: false, properties: ["display","flex-direction","flex-wrap","justify-content","align-items","gap"] },
        { name: "Decoration", open: false, properties: ["box-shadow","opacity","transition","cursor","overflow"] },
        { name: "Position",   open: false, properties: ["position","top","right","bottom","left","z-index","float"] },
      ],
    },

    deviceManager: {
      devices: [
        { name: "Desktop",          width: ""      },
        { name: "Tablet",           width: "768px", widthMedia: "992px" },
        { name: "Mobile portrait",  width: "375px", widthMedia: "480px" },
      ],
    },

    storageManager: false,

    canvas: {
      styles: [
        "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap",
      ],
    },
  });

  if (props.site.html) editor.setComponents(props.site.html);
  if (props.site.css)  editor.setStyle(props.site.css);

  // ── Always show component outlines (visible without hover) ──────────────────
  editor.runCommand("sw-visibility");

  // Register all blocks
  BLOCKS.forEach(({ id, label, category, content, icon }) => {
    editor.BlockManager.add(id, {
      label: `<div class="pgio-block-inner">${icon || ''}<span>${label}</span></div>`,
      category,
      content,
      attributes: { class: "gjs-block-section" },
    });
  });
});
</script>

<style>
/* ─────────────────────────────────────────────────────────────────────────────
   GrapesJS internal overrides — these MUST stay in CSS since they target
   GrapesJS-generated class names that Tailwind cannot reach.
───────────────────────────────────────────────────────────────────────────── */

/* Block panel */
.gjs-block-category .gjs-title {
  background: #f0f4f8 !important;
  color: #1a2535 !important;
  font-size: 10px !important;
  font-weight: 700 !important;
  letter-spacing: 1.5px !important;
  text-transform: uppercase !important;
  padding: 7px 12px !important;
  border-bottom: 1px solid #e5e8ed !important;
}
.gjs-block {
  background: #fff !important;
  border: 1px solid #e5e8ed !important;
  border-radius: 7px !important;
  color: #3a4d66 !important;
  font-size: 10.5px !important;
  padding: 0 !important;
  transition: border-color 0.15s, background 0.15s;
}
.gjs-block:hover {
  background: #f0fbf6 !important;
  border-color: #2dc08a !important;
  color: #1d9e75 !important;
}

/* Block inner layout */
.pgio-block-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px 4px 8px;
}
.pgio-block-inner svg { width: 20px; height: 20px; stroke: #3a4d66; transition: stroke 0.15s; }
.gjs-block:hover .pgio-block-inner svg { stroke: #2dc08a; }
.pgio-block-inner span { font-size: 10px; color: #5a6b80; font-weight: 500; text-align: center; }
.gjs-block:hover .pgio-block-inner span { color: #1d9e75; }

/* Canvas */
#gjs { border: none !important; }
.gjs-frame-wrapper { background: #f0f2f5 !important; }
.gjs-selected  { outline: 2px solid #2dc08a !important; }
.gjs-hovered   { outline: 1px dashed #4ec9d4 !important; }

/* Component visibility outlines (sw-visibility active state) */
.gjs-dashed *  { outline: 1px dashed rgba(45,192,138,0.4) !important; }

/* GrapesJS panels & color theming */
.gjs-pn-panel   { background: transparent !important; }
.gjs-one-bg     { background-color: #1a2535 !important; }
.gjs-two-bg     { background-color: #0f1c2e !important; }
.gjs-three-bg   { background-color: #1a2535 !important; }
.gjs-four-color { color: #2dc08a !important; }
.gjs-four-color-h:hover { color: #2dc08a !important; }

/* Style manager */
.gjs-sm-sector-title {
  background: #0f1c2e !important;
  color: #cdd5e0 !important;
  font-size: 11px !important;
  font-weight: 600 !important;
  border-bottom: 1px solid rgba(255,255,255,0.05) !important;
}
.gjs-sm-property__inner label { color: #8a9bb5 !important; font-size: 11px !important; }
.gjs-sm-field input,
.gjs-sm-field select {
  background: rgba(255,255,255,0.08) !important;
  color: #fff !important;
  border-color: rgba(255,255,255,0.1) !important;
}

/* Layers */
.gjs-layer-title { color: #cdd5e0 !important; font-size: 12px !important; }
.gjs-layer:hover { background: rgba(45,192,138,0.08) !important; }

/* Trait manager */
.gjs-trt-trait__label { color: #8a9bb5 !important; font-size: 12px !important; }
.gjs-trt-trait input  { background: rgba(255,255,255,0.08) !important; color: #fff !important; border-color: rgba(255,255,255,0.1) !important; }

/* Modal */
.gjs-mdl-dialog  { background: #1a2535 !important; border: 1px solid rgba(255,255,255,0.1) !important; }
.gjs-mdl-header  { background: #0f1c2e !important; color: #fff !important; }
.gjs-btn-prim    { background: #2dc08a !important; border-color: #2dc08a !important; }

/* Element action toolbar */
.gjs-toolbar      { background: #2dc08a !important; }
.gjs-toolbar-item:hover { background: rgba(0,0,0,0.15) !important; }

/* Resizer handles */
.gjs-resizer-h { border-color: #2dc08a !important; }

/* ─────────────────────────────────────────────────────────────────────────────
   UI component classes — shared across toolbar buttons and device switchers.
   Using @apply here would require a build step; kept as plain CSS for safety.
───────────────────────────────────────────────────────────────────────────── */
.top-icon-btn {
  background: none; border: none; color: #8a9bb5; cursor: pointer;
  padding: 5px; border-radius: 4px; display: flex; align-items: center;
}
.top-icon-btn:hover { color: #fff; background: rgba(255,255,255,0.08); }

.top-text-btn {
  background: none; border: none; color: #cdd5e0; cursor: pointer;
  font-size: 13px; padding: 4px 6px; border-radius: 4px;
}
.top-text-btn:hover { background: rgba(255,255,255,0.08); }

.edit-mode-btn {
  background: #2dc08a; color: #fff; border: none; border-radius: 5px;
  padding: 5px 12px; font-size: 12px; font-weight: 600; cursor: pointer;
}
.edit-mode-btn:hover { background: #27ae7a; }

.device-btn {
  background: none; border: none; cursor: pointer;
  padding: 4px; border-radius: 4px; display: flex; align-items: center;
}
.device-btn:hover { background: rgba(255,255,255,0.1); }

.tb-btn {
  background: rgba(255,255,255,0.18); border: none; border-radius: 5px;
  color: #fff; padding: 5px 10px; font-size: 11.5px; font-weight: 600;
  cursor: pointer; display: flex; align-items: center; gap: 4px;
  white-space: nowrap; transition: background 0.15s;
}
.tb-btn:hover    { background: rgba(255,255,255,0.3); }
.tb-btn-active   { background: rgba(0,0,0,0.2) !important; }
.tb-btn-muted    { background: rgba(255,255,255,0.12); }
.tb-btn-muted:hover { background: rgba(255,255,255,0.25); }
.tb-btn-save     { background: #1d9e75 !important; }
.tb-btn-save:hover { background: #178c67 !important; }
.tb-btn-report   { background: #e8a22a !important; }
.tb-btn-report:hover { background: #d49220 !important; }
.tb-sep { width: 1px; height: 22px; background: rgba(255,255,255,0.25); margin: 0 2px; flex-shrink: 0; }

.canvas-dev-btn {
  background: rgba(255,255,255,0.06); border: none; color: #8a9bb5;
  padding: 3px 8px; border-radius: 4px; cursor: pointer; font-size: 11px;
  transition: background 0.15s, color 0.15s;
}
.canvas-dev-btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
.canvas-dev-active { background: #2dc08a !important; color: #fff !important; }

/* Scrollbars */
::-webkit-scrollbar       { width: 4px; height: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #c8ced8; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #2dc08a; }
</style>