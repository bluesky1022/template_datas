import {
  faCloud,
  faCode,
  faCodeBranch,
  faCog,
  faDatabase,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

export const serviceLists = [
  "CUDA",
  "Multi-GPU orchestration",
  "Cloud FPGA Development",
  "Blockchain & Accelerated Mining",
  "RTL design",
  "Embedded System",
  "Edge Devices",
  "HLS",
  "NVIDIA Jetson BSP",
  "IOT Firmware",
  "Rust-embedded development",
  "Real-time Linux",
  "FreeRTOS porting",
  "ARM Cortex-R",
  "Xilinx Zynq-7000",
];

export const breadcrumbs = [
  { title: "Home", link: "/" },
  { title: "Hardware", link: "/services/hardware" },
];
export const techLists = {
  "High-Performance Compute": {
    names: "NVIDIA RTX,AWS EC2 FPGA Acceleration",
    icon: faCode,
  },
  "Embedded Systems": {
    names:
      "Xilinx Zynq-7000, Zynq UltraScale+ MPSoC, Versal AI Edge • ESP32-S3, STM32U5, RP2040, NXP i.MX RT",
    icon: faCog,
  },
  "Languages & Tools": {
    names:
      "C/C++, Rust, CUDA C++, OpenCL, SYCL • Verilog/VHDL, SystemVerilog, Chisel • ESP-IDF, cargo-espflash, probe-rs",
    icon: faDatabase,
  },
  "Middleware & Protocols": {
    names: "ROS 2, MQTT, gRPC, OPC-UA",
    icon: faCloud,
  },
  Security: {
    names:
      "TPM/fTPM, OP-TEE, ESP Secure-Boot v2 • XilSecure for PL bit-stream & FSBL encryption",
    icon: faCodeBranch,
  },
  "Profilers & Debuggers": {
    names:
      "Profilers & Debuggers, Nsight Systems, Jetson-stats, Xilinx Vitis Analyzer, OpenOCD/SWO",
    icon: faTools,
  },
};
const keyAspects = [
  "Custom Solutions",
  "Diverse Platforms",
  "Integration and Interoperability",
  "User-Centric Design",
  "Quality Assurance",
  "Support and Maintenance",
  "Adaptation to Emerging Technologies",
  "Consulting and Strategy",
];
export const serviceLeadingData = {
  header: "Hardware Design",
  detail: `Specializing in high-performance computing solutions. We design integrated Xilinx MPSoC systems and custom ASIC miners to 
            maximize your processing throughput and computational efficiency.`,
  keyAspects: keyAspects,
};
export const hardwareServiceCardList = [
  {
    id: "hard-1",
    title: "High-Performance Computing (HPC) Hardware Solutions",
    image: "Services/Hardware/hpc.webp",
    detail:
      "Using NVIDIA GPUs, we transform High Performance Computing (HPC) by resolving bottlenecks and enhancing data throughput, enabling researchers to tackle complex scientific and AI challenges swiftly.",
  },
  {
    id: "hard-2",
    title: "Xilinx Zynq & UltraScale+ MPSoC Design & Integration",
    image: "Services/Hardware/xilinx.tiff",
    detail:
      "We design solutions using Xilinx Zynq/UltraScale+ chips to maximize performance and real-time processing for embedded vision and industrial applications.",
  },
  {
    id: "hard-3",
    title: "Blockchain Acceleration & Custom Mining Hardware (ASIC)",
    image: "Services/Hardware/fpga-mining-2.webp",
    detail:
      "Designing custom ASIC and FPGA hardware accelerates cryptocurrency mining and blockchain security by boosting speed and efficiency while reducing power consumption.",
  },
  {
    id: "hard-4",
    title: "Custom FPGA Design & Integration Services",
    image: "Services/Hardware/fpga-ip.webp",
    detail:
      "We develop custom FPGA solutions and IP cores to provide hardware acceleration, increase flexibility, and allow for easy integration with existing electronic systems.",
  },
  {
    id: "hard-5",
    title: "RTL Design & High-Level Synthesis (HLS) Integration",
    image: "Services/Hardware/vitis.webp",
    detail:
      "We use both low-level RTL and high-level HLS to create efficient, scalable digital hardware faster for ASIC and FPGA platforms.",
  },
  {
    id: "hard-6",
    title: "High-Speed Interface & Sensor Bridge(PCIe, AXI, 10G Ethernet)",
    image: "Services/Hardware/high-speed.webp",
    detail:
      "We implement high-speed interfaces on chips to ensure robust, low-latency data transfer for data-intensive systems.",
  },
  {
    id: "hard-7",
    title: "AI Integrated System & IoT Hardware Development",
    image: "Services/Hardware/drone2.jfif",
    detail:
      "Development of AI Integrated embedded systems, focusing on hardware reliability, power efficiency, and real-time performance.",
  },
  {
    id: "hard-8",
    title: "FreeRTOS Embedded System & Optimization for FPGA Soft-Cores",
    image: "Services/Hardware/freertos.webp",
    detail:
      "Specialized services for porting and tuning FreeRTOS on FPGA-based soft-core processors. Our solutions enhance real-time task scheduling, reduce interrupt latency to ensure deterministic performance.",
  },
];
export const techImgList = [
  {
    serviceName: "High-Performance Computing",
    image: "1.webp",
  },
  {
    serviceName: "High-Performance Computing",
    image: "1.webp",
  },
  {
    serviceName: "High-Performance Computing",
    image: "1.webp",
  },
];

export const HardwareportfolioList = [
  {
    id: "hard-1",
    projectName:
      "FPGA Soft-Core Performance Optimization for Real-Time Image Processing",
    description:
      "Customized FPGA soft-core processor configuration to accelerate image filtering algorithms.",
    technologiesUsed: [
      "Xilinx Vivado",
      "ModelSim",
      "SDKs for FPGA soft-cores",
      "debugging tools",
    ],
    keyAchievements: [
      "Accelerate image processing",
      "35% speed improvement over baseline core.",
    ],
    image: "Soft-Core.webp",
    image2: "Soft-Core1.webp",
    image3: "Soft-Core2.webp",
  },
  {
    id: "hard-2",
    projectName: "Xilinx Zynq and UltraScale+ MPSoc Design",
    description:
      "Integration of programmable logic with processing systems to create high-performance, flexible, and efficient computing solutions",
    technologiesUsed: [
      "Xilinx Zynq 7000 Soc",
      "Xilinx UltraScale+ MPSoc",
      "Vivado Design",
      "HLS",
    ],
    keyAchievements: [
      "Successful Integration",
      "Performance Development",
      "Prototype Development",
    ],
    image: "xilinx.webp",
    image2: "xilinx2.webp",
    image3: "xilinx3.webp",
  },
  {
    id: "hard-3",
    projectName: "Computer Vision",
    description:
      "Enhance image processing tasks such as object detection, image segmentation, and facial recognition.",
    technologiesUsed: ["OpenCV", "CUDA"],
    keyAchievements: [
      "Accelerated Processing",
      "Enhanced Object Detection",
      "Efficient Image Processing",
    ],
    image: "High-Performance1.webp",
    image2: "High-Performance2.webp",
    image3: "High-Performance3.webp",
  },
];
