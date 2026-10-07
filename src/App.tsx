import React, { useState, useEffect, useRef } from 'react';
import { PageRoute } from './pages/PageShell';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { SupportPage } from './pages/SupportPage';
import { SetupPage } from './pages/SetupPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { RefundsPage } from './pages/RefundsPage';
import { EulaPage } from './pages/EulaPage';
import { 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Download, 
  CheckCircle2, 
  Play, 
  Pause,
  ChevronRight, 
  Sliders, 
  Layers, 
  HardDrive, 
  Lock, 
  ExternalLink,
  ChevronDown, 
  Cpu, 
  Monitor, 
  Heart,
  MessageSquare,
  Bot,
  Scissors,
  ArrowRight,
  ArrowLeft,
  Minus,
  Square,
  X,
  Link2,
  Copy,
  Target,
  Radio,
  Activity,
  Gauge,
  Key,
  Check,
  Film,
  RotateCcw,
  AlertTriangle,
  Search,
  Plus
} from 'lucide-react';

interface Preset {
  id: string;
  title: string;
  speaker: string;
  timestamp: string;
  durationSec: number;
  virality: number;
  hook: string;
  caption1: string;
  caption2: string;
  caption3: string;
  sfx: string;
  sfxIcon: 'zap' | 'activity' | 'radio';
  url: string;
}

const PRESETS: Preset[] = [
  {
    id: 'podcast',
    title: 'Joe Rogan Experience #2144',
    speaker: 'Active Speaker 1 (Guest)',
    timestamp: '04:12 - 04:52',
    durationSec: 40,
    virality: 97,
    hook: 'Extreme curiosity hook in the opening 2.4s',
    caption1: 'MOST PEOPLE NEVER',
    caption2: 'REALIZE HOW SIMPLE',
    caption3: 'THIS ACTUALLY IS',
    sfx: 'AUDIO IMPACT WHOOSH',
    sfxIcon: 'zap',
    url: 'https://www.youtube.com/watch?v=0kLhE_8lY2M',
  },
  {
    id: 'hormozi',
    title: 'Alex Hormozi Business Breakdown',
    speaker: 'Solo Keynote Speaker',
    timestamp: '18:30 - 19:15',
    durationSec: 45,
    virality: 94,
    hook: 'Counter-intuitive financial insight for 2026',
    caption1: 'IF YOU WANT TO MAKE',
    caption2: 'YOUR FIRST $100K',
    caption3: 'STOP DOING THIS TODAY',
    sfx: 'BASS DROP & POP',
    sfxIcon: 'activity',
    url: 'https://www.youtube.com/watch?v=7uV89iG8TBo',
  },
  {
    id: 'tech',
    title: 'Lex Fridman AI & Robotics Lab',
    speaker: 'Head of Robotics Research',
    timestamp: '32:10 - 32:48',
    durationSec: 38,
    virality: 91,
    hook: 'High tech revelation with viral visual pacing',
    caption1: 'WE TRAINED THE MODEL',
    caption2: 'TO SOLVE PROBLEMS',
    caption3: 'IN PURE REAL-TIME',
    sfx: 'SYNTH GLITCH HOOK',
    sfxIcon: 'radio',
    url: 'https://www.youtube.com/watch?v=d_k8wW5mKqo',
  }
];

interface HardwareGPU {
  id: string;
  name: string;
  brand: 'NVIDIA' | 'AMD' | 'Apple' | 'Intel' | 'Other';
  vram: string;
  baseRenderSec: number;
  encoder: string;
  tier: 'S' | 'A' | 'B' | 'C';
}

interface HardwareCPU {
  id: string;
  name: string;
  brand: 'Intel' | 'AMD' | 'Apple' | 'Other';
  cores: string;
  speedMultiplier: number;
}

interface HardwareRAM {
  id: string;
  name: string;
  penalty: number;
  recommendation: string;
}

const GPU_LIST: HardwareGPU[] = [
  // NVIDIA 50-Series
  { id: 'rtx5090', name: 'NVIDIA GeForce RTX 5090', brand: 'NVIDIA', vram: '32GB VRAM', baseRenderSec: 9, encoder: 'NVIDIA NVENC (AV1/HEVC Gen 9)', tier: 'S' },
  { id: 'rtx5080', name: 'NVIDIA GeForce RTX 5080', brand: 'NVIDIA', vram: '16GB VRAM', baseRenderSec: 11, encoder: 'NVIDIA NVENC (AV1/HEVC Gen 9)', tier: 'S' },
  { id: 'rtx5070ti', name: 'NVIDIA GeForce RTX 5070 Ti', brand: 'NVIDIA', vram: '16GB VRAM', baseRenderSec: 13, encoder: 'NVIDIA NVENC (AV1/HEVC Gen 9)', tier: 'S' },
  { id: 'rtx5070', name: 'NVIDIA GeForce RTX 5070', brand: 'NVIDIA', vram: '12GB VRAM', baseRenderSec: 14, encoder: 'NVIDIA NVENC (AV1/HEVC Gen 9)', tier: 'S' },

  // NVIDIA 40-Series
  { id: 'rtx4090', name: 'NVIDIA GeForce RTX 4090', brand: 'NVIDIA', vram: '24GB VRAM', baseRenderSec: 12, encoder: 'NVIDIA NVENC (Dual AV1/HEVC)', tier: 'S' },
  { id: 'rtx4080', name: 'NVIDIA GeForce RTX 4080 / 4080 Super', brand: 'NVIDIA', vram: '16GB VRAM', baseRenderSec: 14, encoder: 'NVIDIA NVENC (Dual AV1/HEVC)', tier: 'S' },
  { id: 'rtx4070ti', name: 'NVIDIA GeForce RTX 4070 Ti / Ti Super', brand: 'NVIDIA', vram: '12GB - 16GB VRAM', baseRenderSec: 15, encoder: 'NVIDIA NVENC (AV1/HEVC)', tier: 'S' },
  { id: 'rtx4070', name: 'NVIDIA GeForce RTX 4070 / 4070 Super', brand: 'NVIDIA', vram: '12GB VRAM', baseRenderSec: 17, encoder: 'NVIDIA NVENC (AV1/HEVC)', tier: 'S' },
  { id: 'rtx4060ti', name: 'NVIDIA GeForce RTX 4060 Ti', brand: 'NVIDIA', vram: '8GB - 16GB VRAM', baseRenderSec: 20, encoder: 'NVIDIA NVENC (AV1/HEVC)', tier: 'A' },
  { id: 'rtx4060', name: 'NVIDIA GeForce RTX 4060', brand: 'NVIDIA', vram: '8GB VRAM', baseRenderSec: 22, encoder: 'NVIDIA NVENC (AV1/HEVC)', tier: 'A' },
  { id: 'rtx4050', name: 'NVIDIA GeForce RTX 4050 Laptop', brand: 'NVIDIA', vram: '6GB VRAM', baseRenderSec: 26, encoder: 'NVIDIA NVENC (h264_nvenc)', tier: 'B' },

  // NVIDIA 30-Series
  { id: 'rtx3090', name: 'NVIDIA GeForce RTX 3090 / 3090 Ti', brand: 'NVIDIA', vram: '24GB VRAM', baseRenderSec: 14, encoder: 'NVIDIA NVENC (Ampere h264/hevc)', tier: 'S' },
  { id: 'rtx3080', name: 'NVIDIA GeForce RTX 3080 / 3080 Ti', brand: 'NVIDIA', vram: '10GB - 12GB VRAM', baseRenderSec: 16, encoder: 'NVIDIA NVENC (Ampere h264/hevc)', tier: 'S' },
  { id: 'rtx3070', name: 'NVIDIA GeForce RTX 3070 / 3070 Ti', brand: 'NVIDIA', vram: '8GB VRAM', baseRenderSec: 18, encoder: 'NVIDIA NVENC (Ampere h264/hevc)', tier: 'S' },
  { id: 'rtx3060ti', name: 'NVIDIA GeForce RTX 3060 Ti', brand: 'NVIDIA', vram: '8GB VRAM', baseRenderSec: 20, encoder: 'NVIDIA NVENC (Ampere h264/hevc)', tier: 'A' },
  { id: 'rtx3060', name: 'NVIDIA GeForce RTX 3060 (Desktop & Laptop)', brand: 'NVIDIA', vram: '12GB VRAM', baseRenderSec: 22, encoder: 'NVIDIA NVENC (Ampere h264/hevc)', tier: 'A' },
  { id: 'rtx3050', name: 'NVIDIA GeForce RTX 3050', brand: 'NVIDIA', vram: '6GB - 8GB VRAM', baseRenderSec: 28, encoder: 'NVIDIA NVENC (Ampere h264/hevc)', tier: 'B' },

  // NVIDIA 20-Series & GTX
  { id: 'rtx2080', name: 'NVIDIA GeForce RTX 2080 / 2080 Super / Ti', brand: 'NVIDIA', vram: '8GB - 11GB VRAM', baseRenderSec: 20, encoder: 'NVIDIA NVENC (Turing h264/hevc)', tier: 'A' },
  { id: 'rtx2070', name: 'NVIDIA GeForce RTX 2070 / 2070 Super', brand: 'NVIDIA', vram: '8GB VRAM', baseRenderSec: 23, encoder: 'NVIDIA NVENC (Turing h264/hevc)', tier: 'A' },
  { id: 'rtx2060', name: 'NVIDIA GeForce RTX 2060 / 2060 Super', brand: 'NVIDIA', vram: '6GB - 12GB VRAM', baseRenderSec: 25, encoder: 'NVIDIA NVENC (Turing h264/hevc)', tier: 'B' },
  { id: 'gtx1660', name: 'NVIDIA GeForce GTX 1660 / Ti / Super', brand: 'NVIDIA', vram: '6GB VRAM', baseRenderSec: 30, encoder: 'NVIDIA NVENC (Hardware Acceleration)', tier: 'B' },
  { id: 'gtx1650', name: 'NVIDIA GeForce GTX 1650 / Super', brand: 'NVIDIA', vram: '4GB VRAM', baseRenderSec: 35, encoder: 'NVIDIA NVENC (Hardware Acceleration)', tier: 'B' },
  { id: 'gtx1080', name: 'NVIDIA GeForce GTX 1080 / 1080 Ti', brand: 'NVIDIA', vram: '8GB - 11GB VRAM', baseRenderSec: 27, encoder: 'NVIDIA NVENC (Pascal Hardware)', tier: 'B' },
  { id: 'gtx1070', name: 'NVIDIA GeForce GTX 1070 / 1070 Ti', brand: 'NVIDIA', vram: '8GB VRAM', baseRenderSec: 30, encoder: 'NVIDIA NVENC (Pascal Hardware)', tier: 'B' },
  { id: 'gtx1060', name: 'NVIDIA GeForce GTX 1060', brand: 'NVIDIA', vram: '6GB VRAM', baseRenderSec: 33, encoder: 'NVIDIA NVENC (Pascal Hardware)', tier: 'B' },
  { id: 'gtx1050ti', name: 'NVIDIA GeForce GTX 1050 Ti', brand: 'NVIDIA', vram: '4GB VRAM', baseRenderSec: 42, encoder: 'NVIDIA NVENC (Pascal Hardware)', tier: 'C' },
  { id: 'rtx_workstation', name: 'NVIDIA RTX A6000 / A5000 / A4000', brand: 'NVIDIA', vram: '16GB - 48GB VRAM', baseRenderSec: 12, encoder: 'NVIDIA NVENC Enterprise (Pro)', tier: 'S' },
  { id: 'quadro_rtx', name: 'NVIDIA Quadro RTX 5000 / 4000', brand: 'NVIDIA', vram: '8GB - 16GB VRAM', baseRenderSec: 21, encoder: 'NVIDIA NVENC Enterprise (Pro)', tier: 'A' },

  // AMD Radeon 7000-Series
  { id: 'rx7900xtx', name: 'AMD Radeon RX 7900 XTX / XT', brand: 'AMD', vram: '20GB - 24GB VRAM', baseRenderSec: 15, encoder: 'AMD AMF (AV1/HEVC Hardware)', tier: 'S' },
  { id: 'rx7900gre', name: 'AMD Radeon RX 7900 GRE', brand: 'AMD', vram: '16GB VRAM', baseRenderSec: 18, encoder: 'AMD AMF (AV1/HEVC Hardware)', tier: 'S' },
  { id: 'rx7800xt', name: 'AMD Radeon RX 7800 XT', brand: 'AMD', vram: '16GB VRAM', baseRenderSec: 19, encoder: 'AMD AMF (AV1/HEVC Hardware)', tier: 'S' },
  { id: 'rx7800', name: 'AMD Radeon RX 7900 / 7800 / 6700 Series', brand: 'AMD', vram: '12GB - 24GB VRAM', baseRenderSec: 20, encoder: 'AMD AMF (h264_amf / AV1)', tier: 'S' },
  { id: 'rx7700xt', name: 'AMD Radeon RX 7700 XT', brand: 'AMD', vram: '12GB VRAM', baseRenderSec: 22, encoder: 'AMD AMF (AV1/HEVC Hardware)', tier: 'A' },
  { id: 'rx7600xt', name: 'AMD Radeon RX 7600 XT / 7600', brand: 'AMD', vram: '8GB - 16GB VRAM', baseRenderSec: 24, encoder: 'AMD AMF (AV1/HEVC Hardware)', tier: 'A' },

  // AMD Radeon 6000 & 5000 Series
  { id: 'rx6950xt', name: 'AMD Radeon RX 6950 XT / 6900 XT', brand: 'AMD', vram: '16GB VRAM', baseRenderSec: 17, encoder: 'AMD AMF (RDNA2 h264_amf)', tier: 'S' },
  { id: 'rx6800xt', name: 'AMD Radeon RX 6800 XT / 6800', brand: 'AMD', vram: '16GB VRAM', baseRenderSec: 20, encoder: 'AMD AMF (RDNA2 h264_amf)', tier: 'A' },
  { id: 'rx6700xt', name: 'AMD Radeon RX 6750 XT / 6700 XT', brand: 'AMD', vram: '12GB VRAM', baseRenderSec: 24, encoder: 'AMD AMF (RDNA2 h264_amf)', tier: 'A' },
  { id: 'rx6600xt', name: 'AMD Radeon RX 6650 XT / 6600 XT', brand: 'AMD', vram: '8GB VRAM', baseRenderSec: 27, encoder: 'AMD AMF (RDNA2 h264_amf)', tier: 'B' },
  { id: 'rx6600', name: 'AMD Radeon RX 6600 / 580', brand: 'AMD', vram: '8GB VRAM', baseRenderSec: 30, encoder: 'AMD AMF (RDNA2 h264_amf)', tier: 'B' },
  { id: 'rx6500xt', name: 'AMD Radeon RX 6500 XT', brand: 'AMD', vram: '4GB VRAM', baseRenderSec: 44, encoder: 'AMD AMF (Basic Acceleration)', tier: 'C' },
  { id: 'rx5700xt', name: 'AMD Radeon RX 5700 XT / 5700', brand: 'AMD', vram: '8GB VRAM', baseRenderSec: 28, encoder: 'AMD AMF (RDNA1 h264_amf)', tier: 'B' },
  { id: 'rx5600xt', name: 'AMD Radeon RX 5600 XT', brand: 'AMD', vram: '6GB VRAM', baseRenderSec: 32, encoder: 'AMD AMF (RDNA1 h264_amf)', tier: 'B' },
  { id: 'rx580', name: 'AMD Radeon RX 580 / 590', brand: 'AMD', vram: '8GB VRAM', baseRenderSec: 36, encoder: 'AMD AMF (Polaris h264_amf)', tier: 'B' },
  { id: 'rx_vega', name: 'AMD Radeon RX Vega 64 / 56', brand: 'AMD', vram: '8GB HBM2', baseRenderSec: 33, encoder: 'AMD AMF (Vega Hardware)', tier: 'B' },
  { id: 'radeon_pro', name: 'AMD Radeon Pro W7900 / W7800 / W6800', brand: 'AMD', vram: '16GB - 48GB VRAM', baseRenderSec: 16, encoder: 'AMD AMF Workstation Pro', tier: 'S' },

  // Apple Silicon
  { id: 'apple_m4_max', name: 'Apple M4 Max (32 / 40-core GPU)', brand: 'Apple', vram: '36GB - 128GB Unified', baseRenderSec: 12, encoder: 'Apple VideoToolbox (Metal Acceleration)', tier: 'S' },
  { id: 'apple_m4_pro', name: 'Apple M4 Pro (16 / 20-core GPU)', brand: 'Apple', vram: '24GB - 48GB Unified', baseRenderSec: 15, encoder: 'Apple VideoToolbox (Metal Acceleration)', tier: 'S' },
  { id: 'apple_m4', name: 'Apple M4 (10-core GPU)', brand: 'Apple', vram: '16GB - 32GB Unified', baseRenderSec: 19, encoder: 'Apple VideoToolbox (Metal Acceleration)', tier: 'A' },
  { id: 'apple_m3_max', name: 'Apple M3 Max (30 / 40-core GPU)', brand: 'Apple', vram: '36GB - 128GB Unified', baseRenderSec: 13, encoder: 'Apple VideoToolbox (Metal Acceleration)', tier: 'S' },
  { id: 'apple_m3_pro', name: 'Apple M3 Pro (14 / 18-core GPU)', brand: 'Apple', vram: '18GB - 36GB Unified', baseRenderSec: 17, encoder: 'Apple VideoToolbox (Metal Acceleration)', tier: 'A' },
  { id: 'apple_m3', name: 'Apple M3 (8 / 10-core GPU)', brand: 'Apple', vram: '8GB - 24GB Unified', baseRenderSec: 20, encoder: 'Apple VideoToolbox (Metal Acceleration)', tier: 'A' },
  { id: 'apple_m2_ultra', name: 'Apple M2 Ultra (60 / 76-core GPU)', brand: 'Apple', vram: '64GB - 192GB Unified', baseRenderSec: 11, encoder: 'Apple VideoToolbox (Dual Engine Metal)', tier: 'S' },
  { id: 'apple_m2_max', name: 'Apple M2 Max (30 / 38-core GPU)', brand: 'Apple', vram: '32GB - 96GB Unified', baseRenderSec: 14, encoder: 'Apple VideoToolbox (Metal Acceleration)', tier: 'S' },
  { id: 'apple_m2_pro', name: 'Apple M2 Pro (16 / 19-core GPU)', brand: 'Apple', vram: '16GB - 32GB Unified', baseRenderSec: 18, encoder: 'Apple VideoToolbox (Metal Acceleration)', tier: 'A' },
  { id: 'apple_m2', name: 'Apple M2 (8 / 10-core GPU)', brand: 'Apple', vram: '8GB - 24GB Unified', baseRenderSec: 22, encoder: 'Apple VideoToolbox (Metal Acceleration)', tier: 'A' },
  { id: 'apple_m1_ultra', name: 'Apple M1 Ultra (48 / 64-core GPU)', brand: 'Apple', vram: '64GB - 128GB Unified', baseRenderSec: 13, encoder: 'Apple VideoToolbox (Dual Engine Metal)', tier: 'S' },
  { id: 'apple_m1_max', name: 'Apple M1 Max (24 / 32-core GPU)', brand: 'Apple', vram: '32GB - 64GB Unified', baseRenderSec: 16, encoder: 'Apple VideoToolbox (Metal Acceleration)', tier: 'A' },
  { id: 'apple_m1_pro', name: 'Apple M1 Pro (14 / 16-core GPU)', brand: 'Apple', vram: '16GB - 32GB Unified', baseRenderSec: 19, encoder: 'Apple VideoToolbox (Metal Acceleration)', tier: 'A' },
  { id: 'apple_m1', name: 'Apple M1 (7 / 8-core GPU)', brand: 'Apple', vram: '8GB - 16GB Unified', baseRenderSec: 25, encoder: 'Apple VideoToolbox (Metal Acceleration)', tier: 'B' },
  { id: 'apple_m', name: 'Apple Silicon M-Series (Generic)', brand: 'Apple', vram: 'Unified Memory', baseRenderSec: 19, encoder: 'Apple VideoToolbox (Metal Acceleration)', tier: 'A' },

  // Intel GPUs
  { id: 'arc_a770', name: 'Intel Arc A770', brand: 'Intel', vram: '16GB VRAM', baseRenderSec: 23, encoder: 'Intel QuickSync (AV1/HEVC/h264_qsv)', tier: 'A' },
  { id: 'arc_a750', name: 'Intel Arc A750', brand: 'Intel', vram: '8GB VRAM', baseRenderSec: 26, encoder: 'Intel QuickSync (AV1/HEVC/h264_qsv)', tier: 'B' },
  { id: 'arc_a580', name: 'Intel Arc A580', brand: 'Intel', vram: '8GB VRAM', baseRenderSec: 29, encoder: 'Intel QuickSync (h264_qsv)', tier: 'B' },
  { id: 'arc_a380', name: 'Intel Arc A380', brand: 'Intel', vram: '6GB VRAM', baseRenderSec: 33, encoder: 'Intel QuickSync (h264_qsv)', tier: 'B' },
  { id: 'intel_arc', name: 'Intel Arc Graphics / Ultra Series', brand: 'Intel', vram: '8GB - 16GB / Shared', baseRenderSec: 29, encoder: 'Intel QuickSync (h264_qsv)', tier: 'B' },
  { id: 'iris_xe', name: 'Intel Iris Xe Graphics (Integrated)', brand: 'Intel', vram: 'Shared System RAM', baseRenderSec: 45, encoder: 'Intel QuickSync (h264_qsv)', tier: 'C' },
  { id: 'intel_uhd', name: 'Intel UHD Graphics 770 / 730', brand: 'Intel', vram: 'Shared System RAM', baseRenderSec: 52, encoder: 'Intel QuickSync (h264_qsv)', tier: 'C' },

  // Fallback
  { id: 'cpu_only', name: 'CPU Software Rendering Only (No Dedicated GPU)', brand: 'Other', vram: 'Shared System RAM', baseRenderSec: 62, encoder: 'FFmpeg x264 UltraFast (Multi-threaded CPU)', tier: 'C' }
];

const CPU_LIST: HardwareCPU[] = [
  // Intel Desktop & Mobile
  { id: 'ultra9_285k', name: 'Intel Core Ultra 9 285K / 185H', brand: 'Intel', cores: '24 Cores (8P + 16E)', speedMultiplier: 0.88 },
  { id: 'ultra7_265k', name: 'Intel Core Ultra 7 265K / 155H', brand: 'Intel', cores: '20 Cores (8P + 12E)', speedMultiplier: 0.92 },
  { id: 'ultra5_245k', name: 'Intel Core Ultra 5 245K / 125H', brand: 'Intel', cores: '14 Cores (6P + 8E)', speedMultiplier: 0.98 },
  { id: 'i9_14900k', name: 'Intel Core i9-14900K / 14900KS / 13900K', brand: 'Intel', cores: '24 Cores / 32 Threads', speedMultiplier: 0.89 },
  { id: 'i9_12900k', name: 'Intel Core i9-12900K / 11900K / 10900K', brand: 'Intel', cores: '16 - 24 Cores', speedMultiplier: 0.93 },
  { id: 'i7_14700k', name: 'Intel Core i7-14700K / 13700K', brand: 'Intel', cores: '16 - 20 Cores', speedMultiplier: 0.94 },
  { id: 'i7_12700k', name: 'Intel Core i7-12700K / 11700K / 10700K', brand: 'Intel', cores: '8 - 12 Cores', speedMultiplier: 1.00 },
  { id: 'i7', name: 'Intel Core i7 / AMD Ryzen 7 (8 - 12 Cores Standard)', brand: 'Intel', cores: '8 - 12 Cores', speedMultiplier: 1.00 },
  { id: 'i5_14600k', name: 'Intel Core i5-14600K / 13600K', brand: 'Intel', cores: '14 Cores / 20 Threads', speedMultiplier: 0.98 },
  { id: 'i5_14400', name: 'Intel Core i5-14400 / 13400 / 12600K', brand: 'Intel', cores: '10 Cores / 16 Threads', speedMultiplier: 1.04 },
  { id: 'i5_12400', name: 'Intel Core i5-12400 / 11400 / 10400', brand: 'Intel', cores: '6 Cores / 12 Threads', speedMultiplier: 1.10 },
  { id: 'i5', name: 'Intel Core i5 / AMD Ryzen 5 (6 - 8 Cores Standard)', brand: 'Intel', cores: '6 - 8 Cores', speedMultiplier: 1.08 },
  { id: 'i3_14100', name: 'Intel Core i3-14100 / 13100 / 12100', brand: 'Intel', cores: '4 Cores / 8 Threads', speedMultiplier: 1.25 },
  { id: 'i3', name: 'Intel Core i3 / AMD Ryzen 3 (Quad Core Standard)', brand: 'Intel', cores: '4 Cores', speedMultiplier: 1.25 },
  { id: 'intel_laptop_hx', name: 'Intel Core i9 / i7 High-Performance Laptop (HX / H Series)', brand: 'Intel', cores: '14 - 24 Cores', speedMultiplier: 0.97 },
  { id: 'intel_laptop_u', name: 'Intel Core i5 / i3 Thin & Light Laptop (U / P Series)', brand: 'Intel', cores: '8 - 12 Cores', speedMultiplier: 1.18 },
  { id: 'xeon_w', name: 'Intel Xeon Workstation (W-Series, 16+ Cores)', brand: 'Intel', cores: '16 - 56 Cores', speedMultiplier: 0.90 },

  // AMD Desktop & Mobile
  { id: 'r9_9950x', name: 'AMD Ryzen 9 9950X / 7950X3D / 7950X', brand: 'AMD', cores: '16 Cores / 32 Threads', speedMultiplier: 0.87 },
  { id: 'r9_9900x', name: 'AMD Ryzen 9 9900X / 7900X3D / 7900X / 5950X', brand: 'AMD', cores: '12 - 16 Cores', speedMultiplier: 0.90 },
  { id: 'i9', name: 'Intel Core i9 / AMD Ryzen 9 (16+ Cores Standard)', brand: 'AMD', cores: '16+ Cores', speedMultiplier: 0.90 },
  { id: 'r7_9800x3d', name: 'AMD Ryzen 7 9800X3D / 7800X3D / 7700X', brand: 'AMD', cores: '8 Cores / 16 Threads', speedMultiplier: 0.95 },
  { id: 'r7_5800x3d', name: 'AMD Ryzen 7 5800X3D / 5800X / 5700X', brand: 'AMD', cores: '8 Cores / 16 Threads', speedMultiplier: 1.00 },
  { id: 'r5_9600x', name: 'AMD Ryzen 5 9600X / 7600X / 7600', brand: 'AMD', cores: '6 Cores / 12 Threads', speedMultiplier: 1.02 },
  { id: 'r5_5600x', name: 'AMD Ryzen 5 5600X / 5600 / 3600', brand: 'AMD', cores: '6 Cores / 12 Threads', speedMultiplier: 1.08 },
  { id: 'r3_5300g', name: 'AMD Ryzen 3 5300G / 4100 / 3300X', brand: 'AMD', cores: '4 Cores / 8 Threads', speedMultiplier: 1.24 },
  { id: 'amd_laptop_hs', name: 'AMD Ryzen 9 / 7 Laptop (8000 / 7000 / 6000 Series)', brand: 'AMD', cores: '8 Cores / 16 Threads', speedMultiplier: 0.98 },
  { id: 'amd_laptop_u', name: 'AMD Ryzen 5 / 3 Thin & Light Laptop', brand: 'AMD', cores: '4 - 6 Cores', speedMultiplier: 1.15 },
  { id: 'threadripper', name: 'AMD Threadripper 7000 / Pro Series', brand: 'AMD', cores: '24 - 96 Cores', speedMultiplier: 0.84 },

  // Apple Silicon CPUs
  { id: 'm4_max_cpu', name: 'Apple M4 Max CPU', brand: 'Apple', cores: '14 - 16 Cores (High Perf)', speedMultiplier: 0.90 },
  { id: 'm4_pro_cpu', name: 'Apple M4 Pro CPU', brand: 'Apple', cores: '12 - 14 Cores', speedMultiplier: 0.92 },
  { id: 'm4_cpu', name: 'Apple M4 CPU', brand: 'Apple', cores: '10 Cores', speedMultiplier: 0.95 },
  { id: 'm3_max_cpu', name: 'Apple M3 Max CPU', brand: 'Apple', cores: '14 - 16 Cores', speedMultiplier: 0.92 },
  { id: 'm3_pro_cpu', name: 'Apple M3 Pro CPU', brand: 'Apple', cores: '11 - 12 Cores', speedMultiplier: 0.95 },
  { id: 'm3_cpu', name: 'Apple M3 CPU', brand: 'Apple', cores: '8 Cores', speedMultiplier: 0.98 },
  { id: 'm2_ultra_cpu', name: 'Apple M2 Ultra CPU', brand: 'Apple', cores: '24 Cores', speedMultiplier: 0.89 },
  { id: 'm2_max_cpu', name: 'Apple M2 Max / Pro CPU', brand: 'Apple', cores: '10 - 12 Cores', speedMultiplier: 0.94 },
  { id: 'm2_cpu', name: 'Apple M2 CPU', brand: 'Apple', cores: '8 Cores', speedMultiplier: 1.00 },
  { id: 'm1_ultra_cpu', name: 'Apple M1 Ultra CPU', brand: 'Apple', cores: '20 Cores', speedMultiplier: 0.91 },
  { id: 'm1_max_cpu', name: 'Apple M1 Max / Pro CPU', brand: 'Apple', cores: '8 - 10 Cores', speedMultiplier: 0.96 },
  { id: 'm1_cpu', name: 'Apple M1 CPU', brand: 'Apple', cores: '8 Cores', speedMultiplier: 1.05 },
  { id: 'apple', name: 'Apple M-Series Silicon CPU (Generic)', brand: 'Apple', cores: 'Unified Multi-Core', speedMultiplier: 0.95 },

  // Legacy
  { id: 'legacy_cpu', name: 'Legacy Dual-Core / Older Quad-Core Processor', brand: 'Other', cores: '2 - 4 Cores', speedMultiplier: 1.38 }
];

const RAM_LIST: HardwareRAM[] = [
  { id: '128gb', name: '128 GB or more', penalty: 0.92, recommendation: 'Extreme Workstation grade (Effortless 8K cinema batch rendering)' },
  { id: '64gb', name: '64 GB', penalty: 0.95, recommendation: 'Pro Studio grade (Effortless 4K & multi-cam batch processing)' },
  { id: '48gb', name: '48 GB', penalty: 0.98, recommendation: 'High-speed DDR5 multi-threaded editing & AI pipeline' },
  { id: '32gb', name: '32 GB', penalty: 1.00, recommendation: 'Sweet spot for 4K 60FPS video creation & zero bottleneck' },
  { id: '24gb', name: '24 GB', penalty: 1.02, recommendation: 'Modern creator & gaming multitasking configuration' },
  { id: '16gb', name: '16 GB', penalty: 1.05, recommendation: 'Standard creator configuration (Smooth 1080p rendering)' },
  { id: '12gb', name: '12 GB', penalty: 1.15, recommendation: 'Mid-tier laptop dual-channel memory' },
  { id: '8gb', name: '8 GB', penalty: 1.25, recommendation: 'Minimum baseline (1080p supported)' },
  { id: '4gb', name: '4 GB', penalty: 1.50, recommendation: 'Low memory mode (720p export profile recommended)' }
];

const HARDWARE_PRESETS = [
  { label: 'Gaming Beast', gpu: 'rtx4070', cpu: 'i7_14700k', ram: '32gb' },
  { label: 'Popular Creator PC', gpu: 'rtx3060', cpu: 'i7_14700k', ram: '16gb' },
  { label: 'AMD Workstation', gpu: 'rx7800xt', cpu: 'r9_9950x', ram: '64gb' },
  { label: 'Apple Studio', gpu: 'apple_m3_pro', cpu: 'm3_pro_cpu', ram: '32gb' },
  { label: 'Budget PC', gpu: 'gtx1660', cpu: 'i5_12400', ram: '16gb' }
];

interface SearchableOption {
  id: string;
  name: string;
  brand?: string;
  detail?: string;
  badge?: string;
}

interface SearchableComboboxProps {
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (id: string) => void;
  options: SearchableOption[];
  placeholder?: string;
  searchPlaceholder?: string;
  brands?: string[];
  subLabel?: React.ReactNode;
}

function SearchableCombobox({
  label,
  icon,
  value,
  onChange,
  options,
  placeholder = "Select hardware...",
  searchPlaceholder = "Type to search...",
  brands,
  subLabel
}: SearchableComboboxProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedItem = options.find((opt) => opt.id === value) || options[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      setTimeout(() => inputRef.current?.focus(), 60);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const filteredOptions = options.filter((item) => {
    const matchesBrand = selectedBrand === 'All' || item.brand === selectedBrand;
    if (!matchesBrand) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      item.name.toLowerCase().includes(q) ||
      (item.detail && item.detail.toLowerCase().includes(q)) ||
      (item.badge && item.badge.toLowerCase().includes(q)) ||
      (item.brand && item.brand.toLowerCase().includes(q)) ||
      item.id.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-2 relative" ref={containerRef}>
      <label className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          {icon}
          <span>{label}</span>
        </span>
        {selectedItem && selectedItem.badge && (
          <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
            {selectedItem.badge}
          </span>
        )}
      </label>

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-black/85 text-left rounded-xl p-3 border transition-all flex items-center justify-between gap-2 cursor-pointer shadow-inner ${
          isOpen
            ? "border-emerald-400 ring-2 ring-emerald-400/30 text-white"
            : "border-white/10 hover:border-emerald-400/50 text-zinc-100"
        }`}
      >
        <div className="min-w-0 flex-1">
          <div className="text-xs font-bold truncate text-white">
            {selectedItem ? selectedItem.name : placeholder}
          </div>
          {selectedItem?.detail && (
            <div className="text-[10px] text-zinc-400 truncate mt-0.5">
              {selectedItem.detail}
            </div>
          )}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-emerald-400" : ""
          }`}
        />
      </button>

      {/* Floating Popover */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-[#0d0e14] border border-emerald-400/30 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.9)] p-3 space-y-2.5 backdrop-blur-2xl">
          {/* Search Header */}
          <div className="relative flex items-center bg-black/90 border border-white/15 rounded-xl px-2.5 py-2 focus-within:border-emerald-400 focus-within:ring-1 focus-within:ring-emerald-400/40">
            <Search className="w-3.5 h-3.5 text-zinc-400 shrink-0 mr-2" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value.slice(0, 50).replace(/[<>'"`]/g, ""))}
              placeholder={searchPlaceholder}
              className="text-xs text-white placeholder-zinc-500 bg-transparent outline-none w-full font-medium"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-zinc-400 hover:text-white p-0.5 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Brand Filter Pills (Optional) */}
          {brands && brands.length > 1 && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-0.5 custom-scrollbar">
              {brands.map((b) => {
                const isActive = selectedBrand === b;
                return (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setSelectedBrand(b)}
                    className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition-all shrink-0 cursor-pointer ${
                      isActive
                        ? "bg-emerald-400 text-black shadow-sm"
                        : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {b}
                  </button>
                );
              })}
            </div>
          )}

          {/* Result Count Status */}
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 px-1">
            <span>{filteredOptions.length} models available</span>
            {searchQuery && (
              <span className="text-emerald-400 font-medium">Filtering by "{searchQuery}"</span>
            )}
          </div>

          {/* Scrollable Results List */}
          <div className="max-h-60 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt) => {
                const isSelected = opt.id === value;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      onChange(opt.id);
                      setIsOpen(false);
                      setSearchQuery("");
                    }}
                    className={`w-full p-2.5 rounded-xl text-left transition-all flex items-center justify-between gap-2 cursor-pointer ${
                      isSelected
                        ? "bg-emerald-400/15 border border-emerald-400/50 text-white font-bold"
                        : "border border-transparent hover:bg-white/5 hover:border-white/10 text-zinc-300"
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold truncate flex items-center gap-1.5">
                        <span className={isSelected ? "text-emerald-400 font-bold" : "text-zinc-100"}>
                          {opt.name}
                        </span>
                      </div>
                      {opt.detail && (
                        <div className="text-[10px] text-zinc-400 truncate mt-0.5">
                          {opt.detail}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {opt.badge && (
                        <span className="text-[9.5px] font-mono font-bold px-1.5 py-0.5 rounded bg-white/5 text-emerald-300 border border-emerald-500/20">
                          {opt.badge}
                        </span>
                      )}
                      {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="p-4 text-center space-y-1">
                <div className="text-xs text-zinc-400">No matching hardware found.</div>
                <div className="text-[10px] text-zinc-500 font-mono">
                  Try typing model numbers like "4070", "rx 6700", "i7", or "m3"
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Sub-label/hint beneath selector */}
      {subLabel}
    </div>
  );
}

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isPlayingPreview, setIsPlayingPreview] = useState<boolean>(true);
  const [selectedPreset, setSelectedPreset] = useState<Preset>(PRESETS[0]);
  const [captionStyle, setCaptionStyle] = useState<'hormozi' | 'mrbeast' | 'neon'>('hormozi');
  const [faceTrackingEnabled, setFaceTrackingEnabled] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'preview' | 'askStudio'>('preview');

  // Interactive Hardware Spec Checker States
  const [selectedGpu, setSelectedGpu] = useState<string>('rtx3060');
  const [selectedCpu, setSelectedCpu] = useState<string>('i7');
  const [selectedRam, setSelectedRam] = useState<string>('16gb');
  const [isTestingHardware, setIsTestingHardware] = useState<boolean>(false);

  // Desktop Simulator States
  const [selectedResolution, setSelectedResolution] = useState<'1080p' | '720p' | 'source' | '1440p' | '4k' | '8k'>('1080p');
  const [selectedAspect, setSelectedAspect] = useState<'9:16' | '16:9' | '1:1' | '4:5' | 'source'>('9:16');
  const [selectedLayout, setSelectedLayout] = useState<'auto' | 'dual'>('auto');
  const [mediaSourceTab, setMediaSourceTab] = useState<'youtube' | 'local'>('youtube');
  const [animStep, setAnimStep] = useState<number>(0);
  const [confidence, setConfidence] = useState<number>(98.6);

  // Interactive Ask Studio State
  const [chatPrompt, setChatPrompt] = useState<string>('Why will this clip perform well on TikTok?');
  const [chatResponse, setChatResponse] = useState<string>(
    'The first 3 seconds contain a polarizing contrarian statement that immediately interrupts the user scrolling habit. With the 9:16 Steadicam keeping the speaker centered and neon emerald punch-word subtitles, retention is estimated at 84% through the 30-second mark.'
  );
  const [isTypingChat, setIsTypingChat] = useState<boolean>(false);

  // Full Dedicated Page Routing State (Synced with URL hash for browser history & bookmarks)
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['about', 'faq', 'support', 'setup', 'terms', 'privacy', 'refunds', 'eula'].includes(hash)) {
        return hash as PageRoute;
      }
    }
    return 'home';
  });

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['about', 'faq', 'support', 'setup', 'terms', 'privacy', 'refunds', 'eula'].includes(hash)) {
        setCurrentPage(hash as PageRoute);
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (route: PageRoute) => {
    if (route === 'home') {
      window.location.hash = '';
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = route;
      setCurrentPage(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Playhead animation cycle
  const [progress, setProgress] = useState<number>(35);

  useEffect(() => {
    if (!isPlayingPreview) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 98 ? 10 : prev + 1));
    }, 120);
    return () => clearInterval(interval);
  }, [isPlayingPreview]);

  // Subtitle word-by-word bouncing cycle
  useEffect(() => {
    if (!isPlayingPreview) return;
    const interval = setInterval(() => {
      setAnimStep((prev) => (prev + 1) % 3);
    }, 650);
    return () => clearInterval(interval);
  }, [isPlayingPreview]);

  // Confidence score micro-fluctuations
  useEffect(() => {
    if (!isPlayingPreview) return;
    const interval = setInterval(() => {
      const delta = (Math.random() * 0.8 - 0.4);
      setConfidence(parseFloat(Math.max(97.2, Math.min(99.8, 98.6 + delta)).toFixed(1)));
    }, 850);
    return () => clearInterval(interval);
  }, [isPlayingPreview]);

  const handleAskPrompt = (question: string, reply: string) => {
    const cleanQuestion = question.slice(0, 300).replace(/[<>'"`]/g, "");
    const cleanReply = reply.slice(0, 1500).replace(/[<>]/g, "");
    setChatPrompt(cleanQuestion);
    setIsTypingChat(true);
    setChatResponse('');
    setTimeout(() => {
      setChatResponse(cleanReply);
      setIsTypingChat(false);
    }, 600);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Hardware Compatibility Calculations
  const currentGpu = GPU_LIST.find((g) => g.id === selectedGpu) || GPU_LIST[0];
  const currentCpu = CPU_LIST.find((c) => c.id === selectedCpu) || CPU_LIST[0];
  const currentRam = RAM_LIST.find((r) => r.id === selectedRam) || RAM_LIST[0];

  const calculatedSeconds = Math.round(currentGpu.baseRenderSec * currentCpu.speedMultiplier * currentRam.penalty);
  const realtimeSpeed = (40 / Math.max(1, calculatedSeconds)).toFixed(1);
  const efficiencyScore = Math.min(99, Math.max(45, Math.round((40 / (calculatedSeconds * 0.7)) * 50)));

  const isFullyAccelerated = currentGpu.tier === 'S' || currentGpu.tier === 'A' || currentGpu.tier === 'B';
  const supports4K = (currentGpu.tier === 'S' || currentGpu.tier === 'A') && (selectedRam === '32gb' || selectedRam === '48gb' || selectedRam === '64gb' || selectedRam === '128gb');

  // Hardware Combobox Option Mappings
  const gpuOptions: SearchableOption[] = GPU_LIST.map((g) => ({
    id: g.id,
    name: g.name,
    brand: g.brand,
    detail: `${g.vram} • ${g.encoder}`,
    badge: `Tier ${g.tier}`,
  }));

  const cpuOptions: SearchableOption[] = CPU_LIST.map((c) => ({
    id: c.id,
    name: c.name,
    brand: c.brand,
    detail: `${c.cores} • Multithreaded Pipeline`,
    badge: c.brand,
  }));

  const ramOptions: SearchableOption[] = RAM_LIST.map((r) => ({
    id: r.id,
    name: r.name,
    detail: r.recommendation,
    badge: r.id.toUpperCase(),
  }));

  // Direct checkout links for Lemon Squeezy subscription plans
  const LEMON_PRO_CHECKOUT_URL = 'https://clipvault.lemonsqueezy.com/checkout/buy/04a9b893-78ce-4dd6-9eb9-1708e831c2d9';
  const LEMON_MAX_CHECKOUT_URL = 'https://clipvault.lemonsqueezy.com/checkout/buy/2dbb1ba7-c3e4-414b-99e9-a1a1a385ac49';
  const LEMON_STORE_URL = 'https://clipvault.lemonsqueezy.com';
  const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">("monthly");

  // Route to dedicated full-page views for industry-standard subpage locations
  if (currentPage === 'about') return <AboutPage onNavigate={navigateTo} />;
  if (currentPage === 'faq') return <FaqPage onNavigate={navigateTo} />;
  if (currentPage === 'support') return <SupportPage onNavigate={navigateTo} />;
  if (currentPage === 'setup') return <SetupPage onNavigate={navigateTo} />;
  if (currentPage === 'terms') return <TermsPage onNavigate={navigateTo} />;
  if (currentPage === 'privacy') return <PrivacyPage onNavigate={navigateTo} />;
  if (currentPage === 'refunds') return <RefundsPage onNavigate={navigateTo} />;
  if (currentPage === 'eula') return <EulaPage onNavigate={navigateTo} />;

  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100 selection:bg-emerald-400 selection:text-black">
      {/* ── TOP NAV BAR ── */}
      <nav className="fixed top-0 inset-x-0 z-50 h-16 border-b border-white/5 bg-[#08090d]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 font-display text-xl sm:text-2xl font-black tracking-tight text-white hover:text-emerald-400 transition-colors group">
            <img src="/logo.png" alt="ClipVault" className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg shadow-sm" />
            <span>ClipVault</span>
          </a>

          <div className="hidden lg:flex items-center gap-7 text-xs font-semibold text-zinc-400">
            <a href="#demo" className="hover:text-emerald-400 transition-colors">Interactive Studio</a>
            <a href="#ask-clipvault" className="hover:text-emerald-400 transition-colors">Ask ClipVault AI</a>
            <a href="#workflow" className="hover:text-emerald-400 transition-colors">Workflow</a>
            <a href="#comparison" className="hover:text-emerald-400 transition-colors">Why Local?</a>
            <a href="#benchmarks" className="hover:text-emerald-400 transition-colors">GPU Benchmarks</a>
            <a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#pricing"
              className="text-xs font-bold px-3.5 py-2 rounded-lg text-zinc-300 hover:text-white transition-colors hidden sm:block"
            >
              Pro Plans
            </a>
            <a
              href="#pricing"
              className="text-xs font-bold px-4 py-2 rounded-lg bg-emerald-400 text-black hover:bg-emerald-300 transition-all flex items-center gap-1.5 shadow-[0_0_20px_rgba(0,255,102,0.3)] hover:scale-105 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Free (.exe)</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-44 right-10 w-[350px] h-[350px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-emerald-400/20 text-xs font-medium text-zinc-300 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-zinc-200">ClipVault Desktop Studio v2.4</span>
            <span className="text-zinc-600">•</span>
            <span className="text-emerald-400 font-semibold">100% Local GPU Powered</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            Turn Any Long YouTube Video Into Viral Shorts <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400">
              In 30 Seconds.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Smart 9:16 Active Speaker Steadicam Tracking, Alex Hormozi animated karaoke subtitles, Ask ClipVault AI Assistant, and 3-second stream slicing.
            <span className="text-white font-semibold"> Runs 100% on your PC. Zero server queues. Zero minute limits.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              id="download-hero"
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-400 text-black font-extrabold text-sm flex items-center justify-center gap-2.5 hover:bg-emerald-300 transition-all glow-emerald hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download for Windows (.exe)</span>
            </a>

            <a
              href="#pricing"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/10 hover:border-emerald-400/40 transition-all backdrop-blur-md"
            >
              <Key className="w-4 h-4 text-emerald-400" />
              <span>View Pro Plans ($15/mo)</span>
              <ChevronRight className="w-4 h-4 text-zinc-400" />
            </a>
          </div>

          {/* Social Proof & Specifications */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-white/10 text-left">
            <div className="p-3">
              <div className="font-display text-xl sm:text-2xl font-bold text-white">4K &amp; 8K</div>
              <div className="text-xs text-zinc-400">Master Video Resolution</div>
            </div>
            <div className="p-3">
              <div className="font-display text-xl sm:text-2xl font-bold text-emerald-400">0% Cloud</div>
              <div className="text-xs text-zinc-400">100% Sovereign Privacy</div>
            </div>
            <div className="p-3">
              <div className="font-display text-xl sm:text-2xl font-bold text-white">20–30s</div>
              <div className="text-xs text-zinc-400">NVIDIA NVENC Render</div>
            </div>
            <div className="p-3">
              <div className="font-display text-xl sm:text-2xl font-bold text-white">Unlimited</div>
              <div className="text-xs text-zinc-400">No Monthly Minute Caps</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE STUDIO SIMULATOR ── */}
      <section id="demo" className="py-16 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 mb-2 block">
              Interactive Product Showcase
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white mb-3">
              Experience the Desktop AI Clipping Engine
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
              Test how ClipVault tracks speakers, renders animated karaoke captions, and optimizes virality right on your machine.
            </p>
          </div>

          {/* Interactive Window Mockup matching Desktop App UI */}
          <div className="glass-card-emerald rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.85)] border border-white/10 relative overflow-hidden text-left">
            {/* Desktop App Header Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-[#0c0d12]">
              {/* Left Header: Back button + Logo + Studio Navigation Tabs */}
              <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto">
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 transition-colors shrink-0"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Back</span>
                </button>

                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-6 h-6 rounded-lg bg-emerald-400 text-black flex items-center justify-center font-black shadow-md">
                    <Zap className="w-3.5 h-3.5 fill-black text-black" />
                  </div>
                  <span className="font-display font-extrabold text-sm text-white hidden md:inline">
                    ClipVault Studio
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 font-mono font-bold border border-emerald-400/30">
                    V1
                  </span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 ml-1 sm:ml-3">
                  <button
                    type="button"
                    className="px-3 sm:px-3.5 py-1.5 rounded-lg bg-emerald-400 text-black font-extrabold text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,255,102,0.35)]"
                  >
                    <Zap className="w-3 h-3 fill-black text-black" />
                    <span>Clipper Studio</span>
                  </button>

                  <button
                    type="button"
                    className="px-3 py-1.5 rounded-lg text-zinc-400 hover:text-white font-bold text-xs flex items-center gap-1.5 transition-colors hidden sm:flex"
                  >
                    <Film className="w-3 h-3" />
                    <span>Saved Clips Vault</span>
                  </button>
                </div>
              </div>

              {/* Right Header: Active Engine Badge + Window Controls */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-emerald-400/30 text-[11px] font-mono shadow-inner">
                  <span className="text-zinc-400">Engine:</span>
                  <span className="text-emerald-300 font-bold">Google Gemini</span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-400 text-black text-[9px] font-extrabold">
                    CLOUD AI (API)
                  </span>
                </div>

                <div className="flex items-center gap-2 text-zinc-500 pl-1">
                  <Minus className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                  <Square className="w-3 h-3 hover:text-white cursor-pointer" />
                  <X className="w-3.5 h-3.5 hover:text-red-400 cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Desktop App Workspace Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-7 bg-[#07080c] relative">
              {/* Left Column: Clipper Settings Controls */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                {/* 1. MEDIA SOURCE */}
                <div className="space-y-2.5">
                  <div className="text-[11px] font-black text-emerald-400 uppercase tracking-widest">
                    MEDIA SOURCE
                  </div>

                  {/* Source Toggle Tabs */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setMediaSourceTab("youtube")}
                      className={`flex-1 py-2 px-4 rounded-xl text-xs font-bold transition-all ${
                        mediaSourceTab === "youtube"
                          ? "bg-emerald-400 text-black shadow-md font-extrabold"
                          : "bg-white/5 text-zinc-400 hover:text-white"
                      }`}
                    >
                      YouTube Link
                    </button>
                    <button
                      type="button"
                      onClick={() => setMediaSourceTab("local")}
                      className={`flex-1 py-2 px-4 rounded-xl text-xs font-bold transition-all ${
                        mediaSourceTab === "local"
                          ? "bg-emerald-400 text-black shadow-md font-extrabold"
                          : "bg-white/5 text-zinc-400 hover:text-white"
                      }`}
                    >
                      Local Upload
                    </button>
                  </div>

                  <p className="text-xs text-zinc-400">
                    Paste a YouTube URL to automatically download and extract high-energy clips.
                  </p>

                  {/* Input Box */}
                  <div className="flex items-center gap-2 bg-black/90 border border-white/10 focus-within:border-emerald-400/80 rounded-xl p-2.5 transition-all shadow-inner">
                    <Link2 className="w-4 h-4 text-emerald-400 shrink-0 ml-1" />
                    <input
                      type="text"
                      readOnly
                      value={selectedPreset.url}
                      className="bg-transparent text-xs text-zinc-200 font-mono flex-1 outline-none truncate"
                    />
                    <button
                      type="button"
                      className="px-3 py-1.5 rounded-lg bg-emerald-400/15 hover:bg-emerald-400/25 border border-emerald-400/40 text-emerald-300 text-xs font-bold flex items-center gap-1.5 transition-all shrink-0 cursor-pointer"
                    >
                      <Copy className="w-3 h-3" />
                      <span>Paste</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-zinc-500 leading-relaxed">
                    <span className="text-emerald-400 font-bold">Tip:</span> Paste links directly from your browser. YouTube video IDs are strictly case-sensitive (e.g.{" "}
                    <code className="text-emerald-300 bg-emerald-400/10 px-1 py-0.5 rounded font-mono">F1</code> vs{" "}
                    <code className="text-emerald-300 bg-emerald-400/10 px-1 py-0.5 rounded font-mono">T1</code>).
                  </p>
                </div>

                {/* 2. EXPORT RESOLUTION PROFILE */}
                <div className="space-y-2.5">
                  <div className="text-[11px] font-black text-emerald-400 uppercase tracking-widest">
                    EXPORT RESOLUTION PROFILE
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { id: "1080p", title: "1080p FHD", desc: "Native Shorts • Ultra Fast" },
                      { id: "720p", title: "720p HD", desc: "Fast rendering • Light storage" },
                      { id: "source", title: "Source Native", desc: "Match source resolution" },
                      { id: "1440p", title: "1440p QHD", desc: "2K Quad HD • High detail" },
                      { id: "4k", title: "4K Master", desc: "Ultra HD master export" },
                      { id: "8k", title: "8K Cinema", desc: "Maximum bitrate" },
                    ].map((res) => {
                      const isSel = selectedResolution === res.id;
                      return (
                        <button
                          key={res.id}
                          type="button"
                          onClick={() => setSelectedResolution(res.id as any)}
                          className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                            isSel
                              ? "border-emerald-400 bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/40 shadow-sm"
                              : "border-white/5 bg-black/40 text-zinc-400 hover:border-white/20 hover:text-zinc-200"
                          }`}
                        >
                          <div className={`text-xs font-bold ${isSel ? "text-emerald-400" : "text-white"}`}>
                            {res.title}
                          </div>
                          <div className="text-[10.5px] text-zinc-400 truncate mt-0.5">{res.desc}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. ASPECT RATIO & FRAMING */}
                <div className="space-y-2.5">
                  <div className="text-[11px] font-black text-emerald-400 uppercase tracking-widest">
                    ASPECT RATIO & FRAMING
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: "9:16", title: "9:16 Vertical", desc: "Shorts, Reels, TikTok" },
                      { id: "16:9", title: "16:9 Landscape", desc: "YouTube, Desktop, TV" },
                      { id: "1:1", title: "1:1 Square", desc: "Instagram & Feed" },
                      { id: "4:5", title: "4:5 Social", desc: "Social Portrait" },
                      { id: "source", title: "Source Native", desc: "Original Aspect" },
                    ].map((asp) => {
                      const isSel = selectedAspect === asp.id;
                      return (
                        <button
                          key={asp.id}
                          type="button"
                          onClick={() => setSelectedAspect(asp.id as any)}
                          className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                            isSel
                              ? "border-emerald-400 bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/40 shadow-sm"
                              : "border-white/5 bg-black/40 text-zinc-400 hover:border-white/20 hover:text-zinc-200"
                          }`}
                        >
                          <div className={`text-xs font-bold ${isSel ? "text-emerald-400" : "text-white"}`}>
                            {asp.title}
                          </div>
                          <div className="text-[10px] text-zinc-400 truncate mt-0.5">{asp.desc}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. VIDEO LAYOUT */}
                <div className="space-y-2.5">
                  <div className="text-[11px] font-black text-emerald-400 uppercase tracking-widest">
                    VIDEO LAYOUT
                  </div>

                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setSelectedLayout("auto")}
                      className={`w-full p-3 rounded-xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                        selectedLayout === "auto"
                          ? "border-emerald-400/80 bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/30 shadow-sm"
                          : "border-white/5 bg-black/40 text-zinc-400 hover:border-white/20 hover:text-zinc-200"
                      }`}
                    >
                      <div className="w-6 h-6 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center text-xs font-bold text-emerald-400 shrink-0">
                        1
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-white">Auto Detect & Split (AI Auto)</div>
                        <div className="text-[11px] text-zinc-400">
                          Auto-detects 2-person dialogues or solo speaker
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedLayout("dual")}
                      className={`w-full p-3 rounded-xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                        selectedLayout === "dual"
                          ? "border-emerald-400/80 bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/30 shadow-sm"
                          : "border-white/5 bg-black/40 text-zinc-400 hover:border-white/20 hover:text-zinc-200"
                      }`}
                    >
                      <div className="w-6 h-6 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center text-xs font-bold text-zinc-400 shrink-0">
                        2
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-white">
                          Dual-Speaker Split (2 Persons Stacked)
                        </div>
                        <div className="text-[11px] text-zinc-400">
                          Stacks host on top and guest on bottom with synchronized audio
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Authentic Desktop Smartphone Simulator with Live Working Animation */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[580px]">
                {/* Smartphone Mockup matching Desktop App PhonePreview */}
                <div className="relative w-[335px] max-w-full h-[670px] bg-black rounded-[52px] p-3 shadow-[0_0_80px_rgba(0,0,0,0.95)] border-[8px] border-[#202126] ring-1 ring-white/15 flex flex-col">
                  {/* Dynamic Island / Speaker Pill */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#111] rounded-full z-30 flex items-center justify-center border border-white/5 pointer-events-none">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#1c1c1e] mr-2" />
                    <div className="w-10 h-1.5 rounded-full bg-[#1c1c1e]" />
                  </div>

                  {/* Phone Screen Viewport */}
                  <div className="relative flex-1 bg-[#090a0f] rounded-[40px] overflow-hidden flex flex-col justify-between p-3.5 border border-white/5 text-white select-none">
                    {/* Background Subtle Gradient & Studio Grid */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(0,255,102,0.12)_0%,rgba(10,12,18,0.95)_75%)] pointer-events-none" />

                    {/* Top Monitor Status Bar inside Video Preview */}
                    <div className="relative z-20 flex items-center justify-between text-[10px] font-mono font-bold pt-1">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 border border-emerald-400/30 text-emerald-400 shadow-md">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span className="text-[9px] uppercase tracking-wider">9:16 AI DEMO</span>
                      </div>

                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 border border-white/10 text-zinc-300 shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[9px] tracking-wide text-zinc-200">
                          {selectedPreset.speaker}
                        </span>
                      </div>
                    </div>

                    {/* Video Simulation Stage: Silhouette + Active Speaker Tracking Bounding Box */}
                    <div className="relative z-10 flex-1 flex flex-col items-center justify-center my-2">
                      {/* Stylized Speaker Silhouette Background */}
                      <div className="relative flex items-center justify-center">
                        <div className="w-36 h-44 rounded-full bg-gradient-to-b from-zinc-800/40 via-zinc-900/60 to-black/80 blur-[1px] border border-white/5 flex flex-col items-center justify-center overflow-hidden">
                          <div className="w-14 h-18 rounded-full bg-zinc-800/80 border border-white/10 mt-3 shadow-inner" />
                          <div className="w-32 h-20 rounded-t-[44px] bg-zinc-900/90 border-t border-white/10 -mt-2" />
                        </div>

                        {/* Active Speaker Face Tracking Bounding Box (Animated) */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="relative w-28 h-32 rounded-2xl border-2 border-emerald-400 animate-tracking-box bg-emerald-400/5 backdrop-blur-[0.5px] p-2 flex flex-col justify-between shadow-[0_0_24px_rgba(0,255,102,0.35)]">
                            <div className="flex items-center justify-between text-[8px] font-mono font-black text-emerald-400">
                              <span className="bg-black/70 px-1 py-0.2 rounded border border-emerald-400/30">
                                [ + ]
                              </span>
                              <span className="bg-black/70 px-1 py-0.2 rounded border border-emerald-400/30">
                                {confidence}%
                              </span>
                            </div>

                            <div className="self-center flex items-center justify-center opacity-60">
                              <Target className="w-4 h-4 text-emerald-400/80" />
                            </div>

                            <div className="text-[7.5px] font-mono font-bold text-center text-black bg-emerald-400 rounded py-0.5 px-1 shadow-sm uppercase tracking-wider">
                              ACTIVE SPEAKER LOCK
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Dynamic Hormozi Animated Captions & Sound Effect Tag */}
                      <div className="w-full mt-3 text-center space-y-1.5 z-20">
                        {/* Sound Effect Tag */}
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/85 text-[9px] font-mono font-bold text-emerald-300 border border-emerald-400/40 shadow-[0_0_15px_rgba(0,255,102,0.25)]">
                          {selectedPreset.sfxIcon === "zap" ? (
                            <Zap className="w-2.5 h-2.5 text-emerald-400 animate-pulse shrink-0" />
                          ) : selectedPreset.sfxIcon === "activity" ? (
                            <Activity className="w-2.5 h-2.5 text-emerald-400 animate-pulse shrink-0" />
                          ) : (
                            <Radio className="w-2.5 h-2.5 text-emerald-400 animate-pulse shrink-0" />
                          )}
                          <span>{selectedPreset.sfx}</span>
                        </div>

                        {/* Subtitle Words with Bouncing Hormozi Style */}
                        {captionStyle === "hormozi" && (
                          <div className="space-y-0.5" style={{ fontFamily: "'Anton', 'Impact', sans-serif" }}>
                            <div
                              className={`font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 ${
                                animStep === 0 ? "scale-105 text-white" : "text-white/80"
                              }`}
                              style={{
                                WebkitTextStroke: "1px #000000",
                                textShadow:
                                  "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
                              }}
                            >
                              {selectedPreset.caption1}
                            </div>
                            <div
                              className={`font-black text-sm sm:text-base tracking-wider uppercase transition-all duration-200 ${
                                animStep === 1
                                  ? "scale-115 text-[#00FF66] drop-shadow-[0_0_18px_rgba(0,255,102,0.85)]"
                                  : "scale-105 text-[#00FF66]"
                              }`}
                              style={{
                                WebkitTextStroke: "1.2px #000000",
                                textShadow:
                                  "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 0 20px rgba(0,255,102,0.7)",
                              }}
                            >
                              {selectedPreset.caption2}
                            </div>
                            <div
                              className={`font-black text-[11px] sm:text-xs tracking-wider uppercase transition-all duration-200 ${
                                animStep === 2 ? "scale-110 text-white" : "text-zinc-400"
                              }`}
                              style={{
                                WebkitTextStroke: "1px #000000",
                                textShadow:
                                  "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
                              }}
                            >
                              {selectedPreset.caption3}
                            </div>
                          </div>
                        )}

                        {captionStyle === "mrbeast" && (
                          <div className="space-y-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            <div className="font-black text-xs text-emerald-300 uppercase bg-black/90 px-2 py-0.5 rounded-md inline-block border border-emerald-300/30 shadow-md">
                              {selectedPreset.caption1}
                            </div>
                            <div className="font-black text-sm text-red-500 uppercase bg-black/90 px-2 py-0.5 rounded-md block border border-red-500/30 shadow-md">
                              {selectedPreset.caption2}
                            </div>
                          </div>
                        )}

                        {captionStyle === "neon" && (
                          <div className="space-y-0.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            <div
                              className="font-black text-xs text-cyan-300 uppercase tracking-widest"
                              style={{ textShadow: "0 0 10px rgba(34,211,238,0.9)" }}
                            >
                              {selectedPreset.caption1}
                            </div>
                            <div
                              className="font-black text-sm text-fuchsia-400 uppercase tracking-widest"
                              style={{ textShadow: "0 0 14px rgba(232,121,249,0.9)" }}
                            >
                              {selectedPreset.caption2}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Real-time Audio Spectrum Waveform */}
                      <div className="flex items-center justify-center gap-1 mt-3 h-5">
                        <div className="w-1 bg-emerald-400 rounded-full wave-bar-1" />
                        <div className="w-1 bg-teal-300 rounded-full wave-bar-2" />
                        <div className="w-1 bg-emerald-400 rounded-full wave-bar-3" />
                        <div className="w-1 bg-emerald-300 rounded-full wave-bar-4" />
                        <div className="w-1 bg-emerald-300 rounded-full wave-bar-5" />
                        <div className="w-1 bg-emerald-300 rounded-full wave-bar-6" />
                        <div className="w-1 bg-emerald-400 rounded-full wave-bar-7" />
                        <div className="w-1 bg-teal-300 rounded-full wave-bar-8" />
                      </div>
                    </div>

                    {/* Bottom Dock inside Phone Screen: Progress + Presets */}
                    <div className="relative z-20 space-y-2 pt-2 border-t border-white/10 bg-black/60 backdrop-blur-md rounded-2xl p-2.5">
                      {/* Playhead Progress Bar with live time */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[9.5px] font-mono text-zinc-400">
                          <span className="text-emerald-400 font-bold">
                            00:{Math.floor((progress / 100) * selectedPreset.durationSec).toString().padStart(2, "0")}
                          </span>
                          <span className="text-zinc-500 font-bold">
                            00:{selectedPreset.durationSec.toString().padStart(2, "0")}
                          </span>
                        </div>
                        <div className="w-full bg-zinc-800/80 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-emerald-400 to-teal-300 h-full rounded-full transition-all duration-100 shadow-[0_0_8px_rgba(0,255,102,0.6)]"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>

                      {/* Preset Chips */}
                      <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 pt-0.5">
                        {PRESETS.map((p) => {
                          const isSel = selectedPreset.id === p.id;
                          return (
                            <button
                              key={p.id}
                              type="button"
                              onClick={() => {
                                setSelectedPreset(p);
                                setProgress(15);
                              }}
                              className={`px-2 py-1 rounded-lg text-[9px] font-bold transition-all shrink-0 flex items-center gap-1 cursor-pointer ${
                                isSel
                                  ? "bg-emerald-400 text-black shadow-[0_0_12px_rgba(0,255,102,0.35)]"
                                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
                              }`}
                            >
                              <Film className="w-2.5 h-2.5" />
                              <span>{p.id === "podcast" ? "Podcast" : p.id === "hormozi" ? "Keynote" : "AI Lab"}</span>
                            </button>
                          );
                        })}

                        <button
                          type="button"
                          onClick={() => setIsPlayingPreview(!isPlayingPreview)}
                          className="ml-auto px-2 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-zinc-200 text-[9px] font-bold flex items-center gap-1 cursor-pointer shrink-0"
                          title={isPlayingPreview ? "Pause Simulator" : "Play Simulator"}
                        >
                          {isPlayingPreview ? (
                            <Pause className="w-2.5 h-2.5 text-emerald-400" />
                          ) : (
                            <Play className="w-2.5 h-2.5 text-emerald-400 fill-emerald-400" />
                          )}
                          <span>{isPlayingPreview ? "Pause" : "Play"}</span>
                        </button>
                      </div>

                      {/* Subtitle Style Switcher */}
                      <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[8.5px] font-mono text-zinc-400">
                        <span className="flex items-center gap-1 text-zinc-400">
                          <Sliders className="w-2.5 h-2.5 text-emerald-400" /> Style:
                        </span>
                        <div className="flex items-center gap-1">
                          {(["hormozi", "mrbeast", "neon"] as const).map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => setCaptionStyle(s)}
                              className={`px-1.5 py-0.5 rounded capitalize font-bold transition-all cursor-pointer ${
                                captionStyle === s
                                  ? "bg-emerald-400/20 text-emerald-300 border border-emerald-400/40"
                                  : "text-zinc-500 hover:text-zinc-300"
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Home Indicator Bar */}
                  <div className="w-28 h-1 bg-white/20 rounded-full mx-auto mt-2 pointer-events-none" />
                </div>

                {/* Floating Ask ClipVault AI Button matching Desktop App */}
                <div
                  onClick={() => {
                    const el = document.getElementById("ask-clipvault");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 z-30 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#111218]/95 border border-emerald-400/50 shadow-[0_0_25px_rgba(0,255,102,0.3)] text-emerald-400 text-xs font-bold backdrop-blur-md cursor-pointer hover:scale-105 hover:border-emerald-400 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ask ClipVault</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-emerald-400 text-black text-[9px] font-black">
                    AI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ASK CLIPVAULT AI ASSISTANT SHOWCASE ── */}
      <section id="ask-clipvault" className="py-20 px-4 sm:px-6 bg-zinc-950/60 border-y border-white/5 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-xs font-bold mb-3 border border-emerald-400/20">
              <Bot className="w-3.5 h-3.5" />
              <span>Built-in Conversational Co-Pilot</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Ask ClipVault: Your Personal AI Video Strategist
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
              Ask questions directly about your active video clip. Brainstorm viral titles, analyze retention drop-offs, and generate social captions in real-time.
            </p>
          </div>

          <div className="glass-card-emerald rounded-2xl p-6 border border-white/10 shadow-2xl">
            {/* Interactive Prompt Chips */}
            <div className="mb-4">
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                Click a sample question to test:
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  {
                    q: 'Why will this clip perform well on TikTok?',
                    r: 'The clip possesses a high contrast statement in the opening 2 seconds. TikTok algorithms reward watch-time percentage, and this segment has an estimated 85% completion rate.'
                  },
                  {
                    q: 'Generate 3 high-converting title options',
                    r: '1. Why 99% of People Fail at This (Avoid This Mistake)\n2. The Secret Trick Nobody Is Telling You in 2026\n3. Do This For 30 Days and Watch What Happens'
                  },
                  {
                    q: 'Write an Instagram Reels caption with hashtags',
                    r: 'Stop overcomplicating your workflow. Here is the exact framework to 10x your output without burning out. Save this for later! #productivity #contentcreator #editingtips #clipvault'
                  },
                  {
                    q: 'Suggest an optimal sound effect for the hook',
                    r: 'A deep sub-bass impact drop accompanied by a camera whoosh sound at 00:01.20 when the primary keyword is spoken.'
                  }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAskPrompt(item.q, item.r)}
                    className={`px-3 py-1.5 rounded-lg text-xs transition-all border ${
                      chatPrompt === item.q
                        ? 'bg-emerald-400 text-black font-bold border-emerald-400 shadow-[0_0_12px_rgba(0,255,102,0.3)]'
                        : 'bg-black/40 text-zinc-300 border-white/10 hover:border-emerald-400/40 hover:text-white'
                    }`}
                  >
                    {item.q}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Conversation Box */}
            <div className="bg-black/60 rounded-xl p-4 border border-white/5 space-y-4 font-mono text-xs">
              {/* User Message */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300 shrink-0 font-bold">
                  U
                </div>
                <div className="bg-zinc-800/80 p-3 rounded-xl rounded-tl-none border border-white/5 text-zinc-200 flex-1">
                  {chatPrompt}
                </div>
              </div>

              {/* AI Response */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-400/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-zinc-900/90 p-3 rounded-xl rounded-tl-none border border-emerald-400/20 text-zinc-100 flex-1">
                  {isTypingChat ? (
                    <div className="flex items-center gap-1.5 text-emerald-400 py-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>Analyzing clip semantics &amp; virality metrics...</span>
                    </div>
                  ) : (
                    <div className="whitespace-pre-line leading-relaxed">
                      {chatResponse}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5-STEP AUTOMATED WORKFLOW ── */}
      <section id="workflow" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 mb-2 block">
              Streamlined Production
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mb-4">
              From Raw YouTube Video to Viral 9:16 In 5 Steps
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto">
              No complex timelines. No keyframing manually. ClipVault automates the entire short-form pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                step: '01',
                title: 'Paste URL or File',
                desc: 'Paste any YouTube link or drop a local MP4/MKV file into the studio dashboard.'
              },
              {
                step: '02',
                title: 'HTTP Stream Slice',
                desc: 'ClipVault grabs only the highlight segment in 3 seconds. Saves 99% bandwidth.'
              },
              {
                step: '03',
                title: 'Steadicam Centering',
                desc: 'MediaPipe AI tracks active speaker facial landmarks with smooth ease-in transitions.'
              },
              {
                step: '04',
                title: 'Karaoke Captions',
                desc: 'faster-whisper neural transcription produces word-by-word bouncing viral subtitles.'
              },
              {
                step: '05',
                title: 'Instant 4K Export',
                desc: 'Direct NVIDIA/AMD hardware render delivers a pristine 60FPS vertical video.'
              }
            ].map((step, idx) => (
              <div key={idx} className="glass-card p-5 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-emerald-400/40 transition-all">
                <div>
                  <div className="font-mono text-2xl font-black text-emerald-400/40 mb-3">{step.step}</div>
                  <h3 className="font-display text-sm font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center text-[10px] font-mono text-emerald-400">
                  <span>AUTOMATED</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE SYSTEM HARDWARE COMPATIBILITY & BENCHMARK ── */}
      <section id="benchmarks" className="py-20 px-4 sm:px-6 bg-zinc-950/60 border-y border-white/5 relative overflow-hidden">
        {/* Ambient Gradient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-black tracking-widest text-emerald-400 mb-2 block">
              System Compatibility &amp; Benchmark
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Can Your PC Run ClipVault? Test Your Specs
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Select or customize your GPU, CPU, and RAM to calculate exact render times, verify NVENC/AMF hardware acceleration, and check 4K AI capability.
            </p>
          </div>

          {/* Quick Preset Rigs Bar */}
          <div className="mb-6">
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2.5 text-center">
              Quick Test Popular Rigs:
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {HARDWARE_PRESETS.map((preset, idx) => {
                const isSelected =
                  selectedGpu === preset.gpu && selectedCpu === preset.cpu && selectedRam === preset.ram;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setSelectedGpu(preset.gpu);
                      setSelectedCpu(preset.cpu);
                      setSelectedRam(preset.ram);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                      isSelected
                        ? "bg-emerald-400 text-black border-emerald-400 shadow-[0_0_12px_rgba(0,255,102,0.35)]"
                        : "bg-white/5 border-white/10 text-zinc-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span>{preset.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Hardware Input Glass Card */}
          <div className="glass-card-emerald rounded-2xl p-5 sm:p-7 border border-white/10 shadow-2xl space-y-6">
            {/* 3-Column Selectors for GPU, CPU, RAM */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* GPU Searchable Combobox */}
              <SearchableCombobox
                label="Graphics Card (GPU)"
                icon={<Monitor className="w-3.5 h-3.5" />}
                value={selectedGpu}
                onChange={setSelectedGpu}
                options={gpuOptions}
                searchPlaceholder="Search GPU (e.g. 4070, rx 7800, m3, 1660)..."
                brands={["All", "NVIDIA", "AMD", "Apple", "Intel"]}
                subLabel={
                  <div className="text-[10px] text-zinc-400 font-mono flex items-center justify-between px-1">
                    <span>Engine: {currentGpu.encoder.split(" ")[0]}</span>
                    <span className="text-emerald-400 font-bold">Tier {currentGpu.tier} Acceleration</span>
                  </div>
                }
              />

              {/* CPU Searchable Combobox */}
              <SearchableCombobox
                label="Processor (CPU)"
                icon={<Cpu className="w-3.5 h-3.5" />}
                value={selectedCpu}
                onChange={setSelectedCpu}
                options={cpuOptions}
                searchPlaceholder="Search CPU (e.g. i7-14700K, Ryzen 7, M3 Max)..."
                brands={["All", "Intel", "AMD", "Apple"]}
                subLabel={
                  <div className="text-[10px] text-zinc-400 font-mono flex items-center justify-between px-1">
                    <span>Multithreading: Enabled</span>
                    <span className="text-emerald-400 font-bold">{currentCpu.cores}</span>
                  </div>
                }
              />

              {/* RAM Searchable Combobox */}
              <SearchableCombobox
                label="System Memory (RAM)"
                icon={<HardDrive className="w-3.5 h-3.5" />}
                value={selectedRam}
                onChange={setSelectedRam}
                options={ramOptions}
                searchPlaceholder="Search RAM (e.g. 32gb, 64gb, 16gb)..."
                subLabel={
                  <div className="text-[10px] text-zinc-400 font-mono truncate px-1">
                    {currentRam.recommendation}
                  </div>
                }
              />
            </div>

            {/* Run Test Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/10">
              <div className="text-xs text-zinc-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero cloud uploads. Zero remote servers. 100% On-Device Acceleration.</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsTestingHardware(true);
                  setTimeout(() => {
                    setIsTestingHardware(false);
                  }, 400);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-400 text-black font-extrabold text-xs flex items-center justify-center gap-2 hover:bg-emerald-300 transition-all shadow-[0_0_20px_rgba(0,255,102,0.35)] cursor-pointer hover:scale-105 active:scale-95 shrink-0"
              >
                <Gauge className="w-4 h-4" />
                <span>Test System Compatibility</span>
              </button>
            </div>

            {/* Diagnostic Results Card */}
            {isTestingHardware ? (
              <div className="p-8 rounded-xl bg-black/70 border border-emerald-400/40 flex flex-col items-center justify-center space-y-3 text-center">
                <div className="w-8 h-8 rounded-full border-2 border-emerald-400 border-t-transparent animate-spin" />
                <div className="text-xs font-bold text-emerald-400 font-mono uppercase tracking-wider">
                  Analyzing Hardware Pipeline...
                </div>
                <div className="text-[11px] text-zinc-400">
                  Testing hardware encoders ({currentGpu.encoder}) and MediaPipe memory footprint
                </div>
              </div>
            ) : (
              <div className="p-5 sm:p-6 rounded-xl bg-black/70 border border-emerald-400/40 space-y-5">
                {/* Status Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shadow-md shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                        {isFullyAccelerated
                          ? "Verified 100% Compatible (Hardware Accelerated)"
                          : "Verified Compatible (CPU Software Mode)"}
                      </div>
                      <div className="text-xs text-zinc-300 font-medium">
                        Your system fully supports ClipVault with zero cloud dependencies.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[11px] font-mono text-zinc-400">Active Engine:</span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-emerald-400/30 font-mono text-xs font-bold text-emerald-300">
                      {currentGpu.encoder}
                    </span>
                  </div>
                </div>

                {/* Performance Numbers Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Render Time Box */}
                  <div className="p-4 rounded-xl bg-zinc-950/70 border border-white/5">
                    <div className="text-[11px] text-zinc-400 mb-1 font-mono uppercase">
                      Est. Render (40s Short):
                    </div>
                    <div className="font-display text-3xl sm:text-4xl font-extrabold text-emerald-400">
                      {calculatedSeconds}s
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400 mt-1">
                      {realtimeSpeed}x faster than real-time
                    </div>
                  </div>

                  {/* Hardware Efficiency Score */}
                  <div className="p-4 rounded-xl bg-zinc-950/70 border border-white/5">
                    <div className="text-[11px] text-zinc-400 mb-1 font-mono uppercase">
                      Hardware Efficiency:
                    </div>
                    <div className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                      {efficiencyScore}%
                    </div>
                    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden mt-2">
                      <div
                        className="bg-gradient-to-r from-emerald-400 to-teal-300 h-full rounded-full transition-all duration-500"
                        style={{ width: `${efficiencyScore}%` }}
                      />
                    </div>
                  </div>

                  {/* Max Resolution Support */}
                  <div className="p-4 rounded-xl bg-zinc-950/70 border border-white/5">
                    <div className="text-[11px] text-zinc-400 mb-1 font-mono uppercase">
                      Maximum Resolution:
                    </div>
                    <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                      {supports4K ? "4K & 8K UHD" : "1080p 60FPS"}
                    </div>
                    <div className="text-[11px] text-zinc-400 mt-1">
                      {supports4K ? "Full master export capability" : "Smooth native Shorts output"}
                    </div>
                  </div>
                </div>

                {/* Hardware Capability Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-white/5 text-xs">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      MediaPipe Active Speaker Steadicam: <strong className="text-white">60 FPS Real-time</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      Local Whisper Speech-to-Text: <strong className="text-white">On-Device Processing</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      Background Fan Noise:{" "}
                      <strong className="text-white">
                        {isFullyAccelerated ? "Silent / Minimal" : "Standard CPU Fan"}
                      </strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      Monthly Minute Caps: <strong className="text-emerald-400">Zero (Unlimited Forever)</strong>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── THE CLIPVAULT ADVANTAGE (CORE CAPABILITIES & VALUES) ── */}
      <section id="advantage" className="py-20 px-4 sm:px-6 relative">
        <div id="comparison" className="absolute -top-20" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 mb-2 block">
              Workstation Power • Built For High-Output Creators
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-3">
              The ClipVault Advantage
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl mx-auto">
              Everything you need to transform long YouTube videos and podcasts into high-retention vertical clips—running directly on your computer with maximum speed, privacy, and control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 hover:border-emerald-400/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1">Instant Speed</div>
                <h3 className="text-base font-bold text-white mb-2">Local GPU Acceleration</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Processes and renders video in 20–30 seconds directly on your GPU hardware. No cloud server queues, no waiting in line, and no upload bottlenecks.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500">
                <span>Rendering Time</span>
                <span className="text-emerald-400 font-semibold">20–30s Instant</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 hover:border-emerald-400/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1">True Autonomy</div>
                <h3 className="text-base font-bold text-white mb-2">Unlimited Processing Minutes</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Clip as many hours of video as your projects demand. ClipVault never meters your minutes, cuts off your workflow mid-project, or charges surprise overages.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500">
                <span>Monthly Minute Cap</span>
                <span className="text-emerald-400 font-semibold">Unlimited (0 Caps)</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 hover:border-emerald-400/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1">Broadcast Grade</div>
                <h3 className="text-base font-bold text-white mb-2">4K UHD &amp; High-Bitrate Export</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Export crisp, broadcast-quality vertical shorts in full native resolution. Your footage never undergoes lossy cloud downscaling or aggressive compression.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500">
                <span>Max Export Quality</span>
                <span className="text-emerald-400 font-semibold">Up to 4K / 8K Master</span>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 hover:border-emerald-400/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1">Zero Cloud Ingestion</div>
                <h3 className="text-base font-bold text-white mb-2">100% On-Device Privacy</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Your raw video footage, confidential client files, and personal transcripts never leave your computer. Everything stays securely on your local workstation.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500">
                <span>Data Storage</span>
                <span className="text-emerald-400 font-semibold">100% On-Device Local</span>
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 hover:border-emerald-400/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1">Creator Protection</div>
                <h3 className="text-base font-bold text-white mb-2">100% Commercial Ownership</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  You own every frame and audio channel you export. Monetize freely across YouTube Shorts, TikTok, and Instagram Reels with 0% royalties or revenue share.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500">
                <span>Commercial Royalties</span>
                <span className="text-emerald-400 font-semibold">0% (You Keep 100%)</span>
              </div>
            </div>

            {/* Pillar 6 */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 hover:border-emerald-400/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1">Multi-Model AI</div>
                <h3 className="text-base font-bold text-white mb-2">Flexible Intelligence Engine</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Switch between built-in neural models, Gemini 2.5 Flash, Groq, and Whisper. Connect your own API keys for zero-cost virality scoring and animated captions.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500">
                <span>AI Architecture</span>
                <span className="text-emerald-400 font-semibold">Local + BYOK Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING SECTION (LEMON SQUEEZY SUBSCRIPTIONS) ── */}
      <section id="pricing" className="py-20 px-4 sm:px-6 bg-zinc-950/60 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 mb-2 block">
              Transparent Creator Subscriptions
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mb-4">
              Simple, Predictable Plans.
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto mb-8">
              Cancel anytime. Instant automated license delivery powered by Lemon Squeezy with full workstation autonomy.
            </p>

            {/* Billing Toggle (Monthly / Annual) */}
            <div className="inline-flex items-center gap-3 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setBillingInterval("monthly")}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  billingInterval === "monthly"
                    ? "bg-emerald-400 text-black shadow-md"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingInterval("yearly")}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  billingInterval === "yearly"
                    ? "bg-emerald-400 text-black shadow-md"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <span>Annual Billing</span>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${
                  billingInterval === "yearly" ? "bg-black/20 text-black" : "bg-emerald-400/20 text-emerald-400"
                }`}>
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Free Tier */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-1">Community Free</h3>
                <p className="text-xs text-zinc-400 mb-6">For hobbyists and beginner creators</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-display text-4xl font-extrabold text-white">$0</span>
                  <span className="text-xs text-zinc-400 font-medium">forever</span>
                </div>

                <div className="space-y-3 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-white font-semibold">2 Clips / Week via 1-Click Auto Clipper</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>720p &amp; 1080p HD Video Exports</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-500">
                    <X className="w-3.5 h-3.5 shrink-0" />
                    <span>4K &amp; 8K Master Resolution (Pro Only)</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-500">
                    <X className="w-3.5 h-3.5 shrink-0" />
                    <span>Pro Manual Studio (Pro Only)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Auto 9:16 Face Tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Standard Subtitle Presets</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="#pricing"
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/10 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Free (.exe)</span>
                </a>
              </div>
            </div>

            {/* Creator Pro ($15 / mo) */}
            <div className="glass-card-emerald p-6 sm:p-8 rounded-2xl border-2 border-emerald-400/80 flex flex-col justify-between relative shadow-[0_0_50px_rgba(0,255,102,0.25)]">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-400 text-black font-extrabold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                Most Popular • Recommended
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-white mb-1">Creator Pro</h3>
                <p className="text-xs text-zinc-400 mb-6">For YouTubers, TikTokers &amp; Solo Editors</p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-display text-4xl font-extrabold text-emerald-400">
                    ${billingInterval === "monthly" ? "15" : "12"}
                  </span>
                  <span className="text-xs text-zinc-500 line-through font-medium">
                    ${billingInterval === "monthly" ? "29" : "15"}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">
                    / month {billingInterval === "yearly" && "(billed $144/yr)"}
                  </span>
                </div>

                <div className="space-y-3 text-xs text-zinc-200">
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-white font-semibold">Unlimited 1-Click Auto Clipper</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Pro Manual Studio: 3 Clips / Week</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Unlimited 4K &amp; 8K Exports</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Ask ClipVault AI Co-Pilot Full Access</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>All Viral Subtitle Presets &amp; SFX</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>NVIDIA NVENC, QuickSync &amp; AMF</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Encrypted BYOK AI Freedom</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Commercial EULA v2.4 Rights</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={LEMON_PRO_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-400 text-black font-extrabold text-xs flex items-center justify-center gap-2 hover:bg-emerald-300 transition-all glow-emerald hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Key className="w-3.5 h-3.5" />
                  <span>Subscribe to Creator Pro (${billingInterval === "monthly" ? "15" : "12"}/mo)</span>
                </a>
                <div className="text-[10px] text-zinc-400 text-center mt-2">
                  14-Day Money-Back Guarantee • Cancel Anytime
                </div>
              </div>
            </div>

            {/* Creator Max ($25 / mo) */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-1">Creator Max</h3>
                <p className="text-xs text-zinc-400 mb-6">For power creators, editing teams &amp; agencies</p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-display text-4xl font-extrabold text-white">
                    ${billingInterval === "monthly" ? "25" : "20"}
                  </span>
                  <span className="text-xs text-zinc-500 line-through font-medium">
                    ${billingInterval === "monthly" ? "49" : "25"}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">
                    / month {billingInterval === "yearly" && "(billed $240/yr)"}
                  </span>
                </div>

                <div className="space-y-3 text-xs text-zinc-300">
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-white font-semibold">Unlimited 1-Click Auto Clipper</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-emerald-400 font-semibold">Unlimited Pro Manual Studio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Everything in Creator Pro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Up to 3 Workstation Activations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Batch Video Processing &amp; Queue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Priority Neural Processing &amp; VIP Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Commercial Client Distribution Rights</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={LEMON_MAX_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/10 transition-colors cursor-pointer"
                >
                  <Key className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Subscribe to Creator Max (${billingInterval === "monthly" ? "25" : "20"}/mo)</span>
                </a>
                <div className="text-[10px] text-zinc-400 text-center mt-2">
                  14-Day Money-Back Guarantee • Cancel Anytime
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIPVAULT STUDIO MISSION ── */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto glass-card p-8 rounded-2xl border border-white/10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-xs font-semibold mb-4 border border-emerald-400/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The ClipVault Studio Philosophy</span>
          </div>
          <h3 className="font-display text-2xl font-extrabold text-white mb-3">
            Total Creative Freedom Meets Autonomous AI Editing
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl mx-auto mb-6">
            Most clipping tools treat creators like passive spectators: you paste a link, wait in a server queue, and get a rigid, uneditable output. We engineered ClipVault as a full desktop studio editor—empowering you with complete freedom to direct the AI. Fine-tune your framing, adjust active speaker steadicam parameters, customize animated karaoke styles, consult Ask ClipVault for viral angles, and export uncompressed 4K master files directly on your own workstation.
          </p>
          <div className="flex items-center justify-center gap-4 text-xs font-mono text-zinc-400">
            <a href="mailto:support@clipvault.app" className="hover:text-emerald-400 transition-colors">
              support@clipvault.app
            </a>
            <span>•</span>
            <a 
              href={LEMON_STORE_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline flex items-center gap-1"
            >
              <span>Official Store</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ACCORDION (Chimmy Industry Reference Split-Layout) ── */}
      <section id="faq" className="py-24 px-4 sm:px-6 bg-zinc-950/80 border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Sub-tag, Headline, Subtitle & Quick Navigation Links */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[11px] font-mono font-bold tracking-[0.18em] text-emerald-400 uppercase">
                  THE LITTLE QUESTIONS
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-3">
                  Good to know before you clip.
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  The useful details, from local offline rendering to licensing, privacy, and 4K exports.
                </p>
              </div>

              {/* Quick Action Links with Arrows */}
              <div className="space-y-3 pt-2">
                {[
                  { label: "Terms of Use", route: 'terms' as const },
                  { label: "Privacy Policy", route: 'privacy' as const },
                  { label: "14-Day Refund Policy", route: 'refunds' as const },
                  { label: "Master EULA License", route: 'eula' as const },
                  { label: "Need help? Reach our Support Team", route: 'support' as const },
                ].map((item) => (
                  <button
                    key={item.route}
                    type="button"
                    onClick={() => navigateTo(item.route)}
                    className="group flex items-center gap-2.5 text-sm font-semibold text-zinc-300 hover:text-emerald-400 transition-colors text-left cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-emerald-400 transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </div>

              {/* Trust Badge Card */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 border-l-2 border-l-emerald-400 space-y-1">
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% On-Device Sovereignty</span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Your video files and transcripts never touch any cloud servers. All rendering runs entirely on your local machine hardware.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Accordion with Plus / Minus */}
            <div className="lg:col-span-7 space-y-3">
              {[
                {
                  q: "Do I need an expensive high-end GPU to run ClipVault?",
                  a: "No. While ClipVault leverages NVIDIA NVENC, AMD AMF, and Intel QuickSync graphics cards for blazing-fast 20–30 second exports, it also includes a native multi-core CPU software engine (libx264) that runs smoothly on any standard Windows 10 or 11 desktop and laptop."
                },
                {
                  q: "How does Bring-Your-Own-Key (BYOK) work?",
                  a: "You connect your own API key directly from Google Gemini, Groq, or OpenAI. Google Gemini provides thousands of free daily requests, meaning you can analyze transcripts, score viral clips, and chat with Ask ClipVault without paying recurring AI subscription markups."
                },
                {
                  q: "How does the license key activation work?",
                  a: "Immediately upon checkout through Lemon Squeezy, you receive your unique License Key on screen and via email. Paste it once into the desktop app, and ClipVault activates your workstation instantly. You can manage or cancel your subscription at any time directly through your Lemon Squeezy customer portal."
                },
                {
                  q: "Are the rendered clips safe to monetize on YouTube, TikTok, and Reels?",
                  a: "Yes. ClipVault is engineered specifically for transformative short-form commentary, podcast highlights, and educational clips under Section 107 of the U.S. Copyright Act (Fair Use Doctrine). You retain 100% commercial ownership and full monetization rights."
                },
                {
                  q: "What is your refund policy?",
                  a: "We back every license with an unconditional 14-day money-back guarantee. If ClipVault does not perform properly on your machine or fit your editing workflow, email studioclipvault@gmail.com for an immediate full refund."
                },
                {
                  q: "Is ClipVault available for Mac or Linux?",
                  a: "The current production release is dedicated to Windows 10 & 11 (64-bit) for maximum direct GPU hardware acceleration. Dedicated Apple Silicon (macOS) and Linux editions are actively in progress on our roadmap."
                }
              ].map((item, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'border-emerald-400/40 bg-emerald-400/[0.03] shadow-[0_0_24px_rgba(52,235,61,0.06)]'
                        : 'border-white/10 bg-white/[0.015] hover:border-white/20'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between text-base sm:text-lg font-bold text-white hover:text-emerald-300 transition-colors gap-4 cursor-pointer"
                    >
                      <span className="leading-snug">{item.q}</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                        isOpen 
                          ? 'border-emerald-400/50 bg-emerald-400/10 text-emerald-400' 
                          : 'border-white/10 bg-white/5 text-zinc-400'
                      }`}>
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-300 font-normal leading-relaxed border-t border-white/5 bg-black/20">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── HIGH-CONVERTING 4-COLUMN FOOTER ── */}
      <footer className="pt-16 pb-12 px-4 sm:px-6 border-t border-white/10 bg-[#06070a] text-zinc-400 text-xs">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Column 1: Company */}
            <div>
              <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-4">Company</h4>
              <ul className="space-y-2.5">
                <li>
                  <button 
                    type="button"
                    onClick={() => navigateTo('about')} 
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    About ClipVault
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => navigateTo('support')} 
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    Contact Support
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Product */}
            <div>
              <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-4">Product</h4>
              <ul className="space-y-2.5">
                <li><a href="#features" className="hover:text-emerald-400 transition-colors">1-Click Auto Clipper</a></li>
                <li><a href="#interactive-suite" className="hover:text-emerald-400 transition-colors">Timeline Editor &amp; Trimmer</a></li>
                <li><a href="#advantage" className="hover:text-emerald-400 transition-colors">Core Capabilities</a></li>
                <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Creator Pro &amp; Max Plans</a></li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div>
              <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-4">Resources</h4>
              <ul className="space-y-2.5">
                <li>
                  <button 
                    type="button"
                    onClick={() => navigateTo('faq')} 
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    Help Center &amp; FAQ
                  </button>
                </li>
                <li><a href="#demo" className="hover:text-emerald-400 transition-colors">Interactive Demo</a></li>
                <li>
                  <button 
                    type="button"
                    onClick={() => navigateTo('setup')} 
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    Setup Assistance
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => navigateTo('refunds')} 
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    14-Day Money-Back Guarantee
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Trust & Legal */}
            <div>
              <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-4">Trust &amp; Legal</h4>
              <ul className="space-y-2.5">
                <li>
                  <button 
                    type="button"
                    onClick={() => navigateTo('terms')} 
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    Terms of Use
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => navigateTo('privacy')} 
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    Privacy Policy (Zero Ingestion)
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => navigateTo('eula')} 
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    Workstation EULA v2.5
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => navigateTo('refunds')} 
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    Refund Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="ClipVault" className="w-5 h-5 rounded shadow" />
              <span className="text-white font-bold text-xs">ClipVault</span>
              <span>© 2026 ClipVault AI Studio. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4 text-zinc-500">
              <span>English</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

