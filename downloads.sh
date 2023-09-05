#!/bin/bash
# --------------------------------

## models
echo "Downloading Models..."
cd /workspace/downloads/models
#wget --no-verbose https://huggingface.co/XpucT/Deliberate/resolve/main/Deliberate_v2.safetensors
#wget --no-verbose https://huggingface.co/SG161222/Realistic_Vision_V5.1_noVAE/resolve/main/Realistic_Vision_V5.1.safetensors
#wget --no-verbose https://huggingface.co/SG161222/Realistic_Vision_V5.1_noVAE/resolve/main/Realistic_Vision_V5.1_fp16-no-ema-inpainting.safetensors
wget --no-verbose https://huggingface.co/SG161222/Realistic_Vision_V5.1_noVAE/resolve/main/Realistic_Vision_V5.1_fp16-no-ema.safetensors
### https://civitai.com/models/129666/realities-edge-xl?modelVersionId=142162
#wget --no-verbose -O RealitiesEdgeXL_.safetensors https://civitai.com/api/download/models/142162

## vae
echo "Downloading VAE..."
cd /workspace/downloads/vae
#wget --no-verbose https://huggingface.co/stabilityai/sdxl-vae/resolve/main/sdxl_vae.safetensors
wget --no-verbose https://huggingface.co/stabilityai/sd-vae-ft-mse-original/resolve/main/vae-ft-mse-840000-ema-pruned.safetensors

## facerestore
echo "Downloading FaceRestore Models..."
cd /workspace/downloads/face
wget --no-verbose https://huggingface.co/nlightcho/gfpgan_v14/resolve/main/GFPGANv1.4.pth
wget --no-verbose https://huggingface.co/ziixzz/codeformer-v0.1.0.pth/resolve/main/codeformer-v0.1.0.pth
wget --no-verbose https://github.com/TencentARC/GFPGAN/releases/download/v1.3.4/RestoreFormer.pth

## ControlNet Models for SDXL
#echo "Downloading ControlNet for SDXL..."
#cd /workspace/downloads/controlnet
#wget --no-verbose https://huggingface.co/stabilityai/control-lora/resolve/main/control-LoRAs-rank256/control-lora-recolor-rank256.safetensors
#wget --no-verbose https://huggingface.co/stabilityai/control-lora/resolve/main/control-LoRAs-rank256/control-lora-sketch-rank256.safetensors
#wget --no-verbose https://huggingface.co/stabilityai/control-lora/resolve/main/control-LoRAs-rank256/control-lora-canny-rank256.safetensors
#wget --no-verbose https://huggingface.co/stabilityai/control-lora/resolve/main/control-LoRAs-rank256/control-lora-depth-rank256.safetensors
#wget --no-verbose https://huggingface.co/thibaud/controlnet-openpose-sdxl-1.0/resolve/main/OpenPoseXL2.safetensors
#wget --no-verbose https://huggingface.co/SargeZT/controlnet-sd-xl-1.0-softedge-dexined/resolve/main/controlnet-sd-xl-1.0-softedge-dexined.safetensors

## ControlNet 1.1 (sd1.5)
echo "Downloading ControlNet SD1.5"
cd /workspace/downloads/controlnet
#wget --no-verbose https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11p_sd15s2_lineart_anime.pth
wget --no-verbose https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11p_sd15_softedge.pth
wget --no-verbose https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11p_sd15_seg.pth
#wget --no-verbose https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11p_sd15_scribble.pth
wget --no-verbose https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11p_sd15_openpose.pth
#wget --no-verbose https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11p_sd15_normalbae.pth
#wget --no-verbose https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11p_sd15_mlsd.pth
#wget --no-verbose https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11p_sd15_lineart.pth
#wget --no-verbose https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11p_sd15_inpaint.pth
wget --no-verbose https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11p_sd15_canny.pth
wget --no-verbose https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11f1p_sd15_depth.pth
#wget --no-verbose https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11f1e_sd15_tile.pth
#wget --no-verbose https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11e_sd15_shuffle.pth
#wget --no-verbose https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11e_sd15_ip2p.pth

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
