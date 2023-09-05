#!/bin/bash

cd /workspace

git clone https://github.com/comfyanonymous/ComfyUI.git

python -m venv sd-venv
source /workspace/sd-venv/bin/activate

cd ComfyUI
pip install -r requirements.txt

## comfyui custom nodes
cd /workspace/ComfyUI/custom_nodes
git clone https://github.com/ltdrdata/ComfyUI-Manager.git
git clone https://github.com/EllangoK/ComfyUI-post-processing-nodes.git
git clone https://github.com/Stability-AI/stability-ComfyUI-nodes.git
wget https://raw.githubusercontent.com/biegert/ComfyUI-CLIPSeg/main/custom_nodes/clipseg.py
git clone https://github.com/twri/sdxl_prompt_styler.git

### controlnet
git clone https://github.com/Fannovel16/comfyui_controlnet_aux/
cd comfyui_controlnet_aux
pip install -r requirements.txt
cd ..

### ultimate upscale
git clone https://github.com/ssitu/ComfyUI_UltimateSDUpscale --recursive

### facerestore_cf
git clone https://github.com/mav-rik/facerestore_cf.git
cd facerestore_cf
pip install -r requirements.txt
cd ..

### face restore
#wget -O facerestore.zip https://civitai.com/api/download/models/122586
#unzip facerestore.zip
#rm -rf facerestore.zip
#mkdir -p /workspace/ComfyUI/models/facerestore_models

# --------------------------------

mkdir -p /workspace/downloads/models
mkdir -p /workspace/downloads/controlnet
mkdir -p /workspace/downloads/upscale
mkdir -p /workspace/downloads/face
mkdir -p /workspace/downloads/vae

# -------------------------
rm -rf /workspace/ComfyUI/models/checkpoints
rm -rf /workspace/ComfyUI/models/vae
rm -rf /workspace/ComfyUI/models/facerestore_models
rm -rf /workspace/ComfyUI/models/controlnet
rm -rf /workspace/ComfyUI/models/upscale_models
ln -s /workspace/downloads/models /workspace/ComfyUI/models/checkpoints
ln -s /workspace/downloads/vae /workspace/ComfyUI/models/vae
ln -s /workspace/downloads/face /workspace/ComfyUI/models/facerestore_models
ln -s /workspace/downloads/controlnet /workspace/ComfyUI/models/controlnet
ln -s /workspace/downloads/upscale /workspace/ComfyUI/models/upscale_models

cd /workspace

cat <<EOF > run.sh
#!/bin/bash
cd /workspace/ComfyUI
source /workspace/sd-venv/bin/activate
nohup python main.py --listen 0.0.0.0 --port 3020 &> ../output.log &
EOF

# Make the generated run.sh script executable
chmod +x run.sh

# Replace the content
sed -i 's@/pre_start.sh@/workspace/run.sh@g' /start.sh

# run ComfyUI
cd /workspace/ComfyUI
nohup python main.py --listen 0.0.0.0 --port 3020 &> ../output.log &

cd /workspace
wget https://raw.githubusercontent.com/mav-rik/runpod-comfyui-scripts/master/downloads.sh
sed -i "s/\r$//" /downloads.sh
chmod +x /downloads.sh
nohup /downloads.sh &> ./downloads.log &
