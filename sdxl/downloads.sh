#!/bin/bash
# --------------------------------

## models
echo "Downloading Models..."
cd /workspace/downloads/models
wget --no-verbose https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0.safetensors
wget --no-verbose https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0/resolve/main/sd_xl_refiner_1.0.safetensors

## vae
echo "Downloading VAE..."
cd /workspace/downloads/vae
wget --no-verbose wget https://huggingface.co/stabilityai/sdxl-vae/resolve/main/sdxl_vae.safetensors

## facerestore
echo "Downloading FaceRestore Models..."
cd /workspace/downloads/face
wget --no-verbose https://huggingface.co/nlightcho/gfpgan_v14/resolve/main/GFPGANv1.4.pth
wget --no-verbose https://huggingface.co/ziixzz/codeformer-v0.1.0.pth/resolve/main/codeformer-v0.1.0.pth
wget --no-verbose https://github.com/TencentARC/GFPGAN/releases/download/v1.3.4/RestoreFormer.pth

## ControlNet Models for SDXL
echo "Downloading ControlNet for SDXL..."
cd /workspace/downloads/controlnet
#wget --no-verbose https://huggingface.co/stabilityai/control-lora/resolve/main/control-LoRAs-rank256/control-lora-recolor-rank256.safetensors
#wget --no-verbose https://huggingface.co/stabilityai/control-lora/resolve/main/control-LoRAs-rank256/control-lora-sketch-rank256.safetensors
wget --no-verbose https://huggingface.co/stabilityai/control-lora/resolve/main/control-LoRAs-rank256/control-lora-canny-rank256.safetensors
wget --no-verbose https://huggingface.co/stabilityai/control-lora/resolve/main/control-LoRAs-rank256/control-lora-depth-rank256.safetensors
#wget --no-verbose https://huggingface.co/thibaud/controlnet-openpose-sdxl-1.0/resolve/main/OpenPoseXL2.safetensors
#wget --no-verbose https://huggingface.co/lllyasviel/sd_control_collection/resolve/main/thibaud_xl_openpose_256lora.safetensors
#wget --no-verbose https://huggingface.co/SargeZT/controlnet-sd-xl-1.0-softedge-dexined/resolve/main/controlnet-sd-xl-1.0-softedge-dexined.safetensors

## upscalers
echo "Downloading Upscalers..."
cd /workspace/downloads/upscale
wget --no-verbose https://huggingface.co/utnah/esrgan/resolve/main/4x_Valar_v1.pth
wget --no-verbose https://huggingface.co/utnah/esrgan/resolve/main/4x-UltraSharp.pth
wget --no-verbose https://huggingface.co/utnah/esrgan/resolve/main/4xESRGAN.pth
wget --no-verbose https://huggingface.co/utnah/esrgan/resolve/main/4x_Faces_04_N_180000_G.pth
wget --no-verbose https://huggingface.co/utnah/esrgan/resolve/main/1x_ISO_denoise_v1.pth
wget --no-verbose https://huggingface.co/utnah/esrgan/resolve/main/1x_ColorizerV2_22000G.pth

echo "Downloading complete. Ready to enjoy ComfyUI!"
