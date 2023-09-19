#!/bin/bash
# --------------------------------

## models
echo "Downloading Models..."
cd /workspace/downloads/models
wget --no-verbose https://huggingface.co/SG161222/Realistic_Vision_V5.1_noVAE/resolve/main/Realistic_Vision_V5.1_fp16-no-ema.safetensors

## vae
echo "Downloading VAE..."
cd /workspace/downloads/vae
wget --no-verbose https://huggingface.co/stabilityai/sd-vae-ft-mse-original/resolve/main/vae-ft-mse-840000-ema-pruned.safetensors

## facerestore
echo "Downloading FaceRestore Models..."
cd /workspace/downloads/face
wget --no-verbose https://huggingface.co/nlightcho/gfpgan_v14/resolve/main/GFPGANv1.4.pth
wget --no-verbose https://huggingface.co/ziixzz/codeformer-v0.1.0.pth/resolve/main/codeformer-v0.1.0.pth
wget --no-verbose https://github.com/TencentARC/GFPGAN/releases/download/v1.3.4/RestoreFormer.pth

## ControlNet 1.1 (sd1.5)
echo "Downloading ControlNet SD1.5"
cd /workspace/downloads/controlnet
wget --no-verbose https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11p_sd15_softedge.pth
# wget --no-verbose https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11p_sd15_seg.pth
wget --no-verbose https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11p_sd15_openpose.pth
wget --no-verbose https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11p_sd15_canny.pth
wget --no-verbose https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11f1p_sd15_depth.pth
wget --no-verbose https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11f1e_sd15_tile.pth
wget --no-verbose -O ioclab_sd15_recolor.safetensors https://huggingface.co/ioclab/control_v1p_sd15_brightness/resolve/main/diffusion_pytorch_model.safetensors

## upscalers
echo "Downloading Upscalers..."
cd /workspace/downloads/upscale
wget --no-verbose https://huggingface.co/utnah/esrgan/resolve/main/4x_Valar_v1.pth
wget --no-verbose https://huggingface.co/gemasai/4x_NMKD-Superscale-SP_178000_G/resolve/main/4x_NMKD-Superscale-SP_178000_G.pth
wget --no-verbose https://huggingface.co/utnah/esrgan/resolve/main/4x-UltraSharp.pth
wget --no-verbose https://huggingface.co/utnah/esrgan/resolve/main/4xESRGAN.pth
wget --no-verbose https://huggingface.co/utnah/esrgan/resolve/main/4x_Faces_04_N_180000_G.pth
wget --no-verbose https://huggingface.co/utnah/esrgan/resolve/main/1x_ISO_denoise_v1.pth
wget --no-verbose https://huggingface.co/utnah/esrgan/resolve/main/1x_ColorizerV2_22000G.pth

echo "Downloading complete. Ready to enjoy ComfyUI!"
