export const defaultGraph = {
    "last_node_id": 122,
    "last_link_id": 180,
    "nodes": [
        {
            "id": 51,
            "type": "Reroute",
            "pos": [
                1039.9659335859376,
                1410.3481964062491
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 43,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 73
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "IMAGE",
                    "links": [
                        74,
                        75
                    ],
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#2a363b",
            "bgcolor": "#3f5159"
        },
        {
            "id": 50,
            "type": "Reroute",
            "pos": [
                699.9659335859385,
                1410.3481964062491
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 38,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 72
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "IMAGE",
                    "links": [
                        73,
                        76
                    ],
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#2a363b",
            "bgcolor": "#3f5159"
        },
        {
            "id": 52,
            "type": "Reroute",
            "pos": [
                1369.9659335859376,
                1410.3481964062491
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 51,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 74
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "IMAGE",
                    "links": [
                        77
                    ],
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#2a363b",
            "bgcolor": "#3f5159"
        },
        {
            "id": 56,
            "type": "PreviewImage",
            "pos": [
                1449.9659335859376,
                1620.3481964062491
            ],
            "size": {
                "0": 315.9530334472656,
                "1": 269.3422546386719
            },
            "flags": {
                "pinned": true
            },
            "order": 62,
            "mode": 0,
            "inputs": [
                {
                    "name": "images",
                    "type": "IMAGE",
                    "link": 81
                }
            ],
            "properties": {
                "Node name for S&R": "PreviewImage"
            },
            "color": "#2a363b",
            "bgcolor": "#3f5159"
        },
        {
            "id": 45,
            "type": "MiDaS-DepthMapPreprocessor",
            "pos": [
                442.96593358593736,
                1470.3481964062491
            ],
            "size": {
                "0": 315,
                "1": 82
            },
            "flags": {
                "pinned": true
            },
            "order": 37,
            "mode": 0,
            "inputs": [
                {
                    "name": "image",
                    "type": "IMAGE",
                    "link": 69
                }
            ],
            "outputs": [
                {
                    "name": "IMAGE",
                    "type": "IMAGE",
                    "links": [
                        78,
                        84
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "MiDaS-DepthMapPreprocessor"
            },
            "widgets_values": [
                6.283185307179586,
                0.4
            ],
            "color": "#2a363b",
            "bgcolor": "#3f5159"
        },
        {
            "id": 46,
            "type": "CannyEdgePreprocessor",
            "pos": [
                779.9659335859385,
                1470.3481964062491
            ],
            "size": {
                "0": 315,
                "1": 82
            },
            "flags": {
                "pinned": true
            },
            "order": 44,
            "mode": 0,
            "inputs": [
                {
                    "name": "image",
                    "type": "IMAGE",
                    "link": 76
                }
            ],
            "outputs": [
                {
                    "name": "IMAGE",
                    "type": "IMAGE",
                    "links": [
                        79,
                        85
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "CannyEdgePreprocessor"
            },
            "widgets_values": [
                100,
                200
            ],
            "color": "#2a363b",
            "bgcolor": "#3f5159"
        },
        {
            "id": 44,
            "type": "HEDPreprocessor",
            "pos": [
                1109.9659335859376,
                1470.3481964062491
            ],
            "size": {
                "0": 315,
                "1": 58
            },
            "flags": {
                "pinned": true
            },
            "order": 52,
            "mode": 0,
            "inputs": [
                {
                    "name": "image",
                    "type": "IMAGE",
                    "link": 75
                }
            ],
            "outputs": [
                {
                    "name": "IMAGE",
                    "type": "IMAGE",
                    "links": [
                        80,
                        86
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "HEDPreprocessor"
            },
            "widgets_values": [
                "enable"
            ],
            "color": "#2a363b",
            "bgcolor": "#3f5159"
        },
        {
            "id": 43,
            "type": "DWPreprocessor",
            "pos": [
                1449.9659335859376,
                1470.3481964062491
            ],
            "size": {
                "0": 315,
                "1": 106
            },
            "flags": {
                "pinned": true
            },
            "order": 58,
            "mode": 0,
            "inputs": [
                {
                    "name": "image",
                    "type": "IMAGE",
                    "link": 77
                }
            ],
            "outputs": [
                {
                    "name": "IMAGE",
                    "type": "IMAGE",
                    "links": [
                        81,
                        87
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "DWPreprocessor"
            },
            "widgets_values": [
                "enable",
                "enable",
                "enable"
            ],
            "color": "#2a363b",
            "bgcolor": "#3f5159"
        },
        {
            "id": 62,
            "type": "ControlNetLoader",
            "pos": [
                442.96593358593736,
                1139.3481964062491
            ],
            "size": {
                "0": 315,
                "1": 58
            },
            "flags": {
                "pinned": true
            },
            "order": 0,
            "mode": 0,
            "outputs": [
                {
                    "name": "CONTROL_NET",
                    "type": "CONTROL_NET",
                    "links": [
                        88
                    ],
                    "shape": 3
                }
            ],
            "title": "Depth",
            "properties": {
                "Node name for S&R": "ControlNetLoader"
            },
            "widgets_values": [
                "control_v11f1p_sd15_depth.pth"
            ],
            "color": "#2a363b",
            "bgcolor": "#3f5159"
        },
        {
            "id": 63,
            "type": "ControlNetLoader",
            "pos": [
                779.9659335859385,
                1139.3481964062491
            ],
            "size": {
                "0": 315,
                "1": 58
            },
            "flags": {
                "pinned": true
            },
            "order": 1,
            "mode": 0,
            "outputs": [
                {
                    "name": "CONTROL_NET",
                    "type": "CONTROL_NET",
                    "links": [
                        91
                    ],
                    "shape": 3
                }
            ],
            "title": "Canny",
            "properties": {
                "Node name for S&R": "ControlNetLoader"
            },
            "widgets_values": [
                "control_v11p_sd15_canny.pth"
            ],
            "color": "#2a363b",
            "bgcolor": "#3f5159"
        },
        {
            "id": 64,
            "type": "ControlNetLoader",
            "pos": [
                1109.9659335859376,
                1139.3481964062491
            ],
            "size": {
                "0": 315,
                "1": 58
            },
            "flags": {
                "pinned": true
            },
            "order": 2,
            "mode": 0,
            "outputs": [
                {
                    "name": "CONTROL_NET",
                    "type": "CONTROL_NET",
                    "links": [
                        90
                    ],
                    "shape": 3
                }
            ],
            "title": "Soft Edge",
            "properties": {
                "Node name for S&R": "ControlNetLoader"
            },
            "widgets_values": [
                "control_v11p_sd15_softedge.pth"
            ],
            "color": "#2a363b",
            "bgcolor": "#3f5159"
        },
        {
            "id": 65,
            "type": "ControlNetLoader",
            "pos": [
                1449.9659335859376,
                1139.3481964062491
            ],
            "size": {
                "0": 315,
                "1": 58
            },
            "flags": {
                "pinned": true
            },
            "order": 3,
            "mode": 0,
            "outputs": [
                {
                    "name": "CONTROL_NET",
                    "type": "CONTROL_NET",
                    "links": [
                        89
                    ],
                    "shape": 3
                }
            ],
            "title": "OpenPose",
            "properties": {
                "Node name for S&R": "ControlNetLoader"
            },
            "widgets_values": [
                "control_v11p_sd15_openpose.pth"
            ],
            "color": "#2a363b",
            "bgcolor": "#3f5159"
        },
        {
            "id": 60,
            "type": "ControlNetApplyAdvanced",
            "pos": [
                1109.9659335859376,
                1245.3481964062491
            ],
            "size": {
                "0": 315,
                "1": 166
            },
            "flags": {
                "pinned": true
            },
            "order": 60,
            "mode": 0,
            "inputs": [
                {
                    "name": "positive",
                    "type": "CONDITIONING",
                    "link": 94
                },
                {
                    "name": "negative",
                    "type": "CONDITIONING",
                    "link": 95
                },
                {
                    "name": "control_net",
                    "type": "CONTROL_NET",
                    "link": 90,
                    "slot_index": 2
                },
                {
                    "name": "image",
                    "type": "IMAGE",
                    "link": 86
                }
            ],
            "outputs": [
                {
                    "name": "positive",
                    "type": "CONDITIONING",
                    "links": [
                        96
                    ],
                    "shape": 3,
                    "slot_index": 0
                },
                {
                    "name": "negative",
                    "type": "CONDITIONING",
                    "links": [
                        97
                    ],
                    "shape": 3,
                    "slot_index": 1
                }
            ],
            "properties": {
                "Node name for S&R": "ControlNetApplyAdvanced"
            },
            "widgets_values": [
                0.4499999999999996,
                0,
                1
            ],
            "color": "#2a363b",
            "bgcolor": "#3f5159"
        },
        {
            "id": 66,
            "type": "Reroute",
            "pos": [
                304.9659335859373,
                1235.3633941601554
            ],
            "size": [
                75,
                26
            ],
            "flags": {
                "pinned": true
            },
            "order": 25,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 113
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "CONDITIONING",
                    "links": [
                        98
                    ]
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#232",
            "bgcolor": "#353"
        },
        {
            "id": 68,
            "type": "Reroute",
            "pos": [
                1832.9659335859376,
                1235.3633941601554
            ],
            "size": [
                75,
                26
            ],
            "flags": {
                "pinned": true
            },
            "order": 65,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 100
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "CONDITIONING",
                    "links": [
                        107,
                        165
                    ],
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#232",
            "bgcolor": "#353"
        },
        {
            "id": 61,
            "type": "ControlNetApplyAdvanced",
            "pos": [
                1449.9659335859376,
                1245.3481964062491
            ],
            "size": {
                "0": 315,
                "1": 166
            },
            "flags": {
                "pinned": true
            },
            "order": 63,
            "mode": 0,
            "inputs": [
                {
                    "name": "positive",
                    "type": "CONDITIONING",
                    "link": 96
                },
                {
                    "name": "negative",
                    "type": "CONDITIONING",
                    "link": 97
                },
                {
                    "name": "control_net",
                    "type": "CONTROL_NET",
                    "link": 89,
                    "slot_index": 2
                },
                {
                    "name": "image",
                    "type": "IMAGE",
                    "link": 87
                }
            ],
            "outputs": [
                {
                    "name": "positive",
                    "type": "CONDITIONING",
                    "links": [
                        100
                    ],
                    "shape": 3,
                    "slot_index": 0
                },
                {
                    "name": "negative",
                    "type": "CONDITIONING",
                    "links": [
                        101
                    ],
                    "shape": 3,
                    "slot_index": 1
                }
            ],
            "properties": {
                "Node name for S&R": "ControlNetApplyAdvanced"
            },
            "widgets_values": [
                1,
                0,
                1
            ],
            "color": "#2a363b",
            "bgcolor": "#3f5159"
        },
        {
            "id": 69,
            "type": "Reroute",
            "pos": [
                1832.9659335859376,
                1269.3481964062491
            ],
            "size": [
                75,
                26
            ],
            "flags": {
                "pinned": true
            },
            "order": 66,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 101
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "CONDITIONING",
                    "links": [
                        108,
                        166
                    ],
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#322",
            "bgcolor": "#533"
        },
        {
            "id": 48,
            "type": "Reroute",
            "pos": [
                304.9659335859373,
                1406.3481964062491
            ],
            "size": [
                75,
                26
            ],
            "flags": {
                "pinned": true
            },
            "order": 35,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 116
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "IMAGE",
                    "links": [
                        69,
                        72
                    ],
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#222",
            "bgcolor": "#000"
        },
        {
            "id": 55,
            "type": "PreviewImage",
            "pos": [
                1109.9659335859376,
                1620.3481964062491
            ],
            "size": {
                "0": 316.54803466796875,
                "1": 269.3422546386719
            },
            "flags": {
                "pinned": true
            },
            "order": 59,
            "mode": 0,
            "inputs": [
                {
                    "name": "images",
                    "type": "IMAGE",
                    "link": 80
                }
            ],
            "properties": {
                "Node name for S&R": "PreviewImage"
            },
            "color": "#2a363b",
            "bgcolor": "#3f5159"
        },
        {
            "id": 54,
            "type": "PreviewImage",
            "pos": [
                779.9659335859385,
                1620.3481964062491
            ],
            "size": {
                "0": 315.1290283203125,
                "1": 269.3422546386719
            },
            "flags": {
                "pinned": true
            },
            "order": 53,
            "mode": 0,
            "inputs": [
                {
                    "name": "images",
                    "type": "IMAGE",
                    "link": 79
                }
            ],
            "properties": {
                "Node name for S&R": "PreviewImage"
            },
            "color": "#2a363b",
            "bgcolor": "#3f5159"
        },
        {
            "id": 58,
            "type": "ControlNetApplyAdvanced",
            "pos": [
                442.96593358593736,
                1245.3481964062491
            ],
            "size": {
                "0": 315,
                "1": 166
            },
            "flags": {
                "pinned": true
            },
            "order": 42,
            "mode": 0,
            "inputs": [
                {
                    "name": "positive",
                    "type": "CONDITIONING",
                    "link": 98,
                    "slot_index": 0
                },
                {
                    "name": "negative",
                    "type": "CONDITIONING",
                    "link": 99,
                    "slot_index": 1
                },
                {
                    "name": "control_net",
                    "type": "CONTROL_NET",
                    "link": 88,
                    "slot_index": 2
                },
                {
                    "name": "image",
                    "type": "IMAGE",
                    "link": 84
                }
            ],
            "outputs": [
                {
                    "name": "positive",
                    "type": "CONDITIONING",
                    "links": [
                        92
                    ],
                    "shape": 3,
                    "slot_index": 0
                },
                {
                    "name": "negative",
                    "type": "CONDITIONING",
                    "links": [
                        93
                    ],
                    "shape": 3,
                    "slot_index": 1
                }
            ],
            "properties": {
                "Node name for S&R": "ControlNetApplyAdvanced"
            },
            "widgets_values": [
                1,
                0,
                1
            ],
            "color": "#2a363b",
            "bgcolor": "#3f5159"
        },
        {
            "id": 53,
            "type": "PreviewImage",
            "pos": [
                442.96593358593736,
                1620.3481964062491
            ],
            "size": {
                "0": 312.7240295410156,
                "1": 269.3422546386719
            },
            "flags": {
                "pinned": true
            },
            "order": 41,
            "mode": 0,
            "inputs": [
                {
                    "name": "images",
                    "type": "IMAGE",
                    "link": 78
                }
            ],
            "properties": {
                "Node name for S&R": "PreviewImage"
            },
            "color": "#2a363b",
            "bgcolor": "#3f5159"
        },
        {
            "id": 67,
            "type": "Reroute",
            "pos": [
                304.9659335859373,
                1269.3481964062491
            ],
            "size": [
                75,
                26
            ],
            "flags": {
                "pinned": true
            },
            "order": 26,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 114
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "CONDITIONING",
                    "links": [
                        99
                    ]
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#322",
            "bgcolor": "#533"
        },
        {
            "id": 70,
            "type": "Reroute",
            "pos": [
                310,
                1005
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 22,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 151
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "VAE",
                    "links": [
                        103
                    ],
                    "label": "VAE",
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#332922",
            "bgcolor": "#593930"
        },
        {
            "id": 73,
            "type": "Reroute",
            "pos": [
                1850,
                980
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 23,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 105
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "MODEL",
                    "links": [
                        106
                    ],
                    "slot_index": 0,
                    "label": "model"
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#223",
            "bgcolor": "#335"
        },
        {
            "id": 72,
            "type": "Reroute",
            "pos": [
                309,
                975
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 15,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 104
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "MODEL",
                    "links": [
                        105
                    ],
                    "slot_index": 0,
                    "label": "model"
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#223",
            "bgcolor": "#335"
        },
        {
            "id": 74,
            "type": "Reroute",
            "pos": [
                1993,
                1380
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 70,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 112,
                    "slot_index": 0
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "LATENT",
                    "links": [
                        109
                    ],
                    "label": "latent"
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#323",
            "bgcolor": "#535"
        },
        {
            "id": 76,
            "type": "Reroute",
            "pos": [
                1834,
                1943
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 67,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 111
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "LATENT",
                    "links": [
                        112
                    ],
                    "slot_index": 0,
                    "label": "latent"
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#323",
            "bgcolor": "#535"
        },
        {
            "id": 37,
            "type": "CLIPTextEncode",
            "pos": [
                -190,
                1081
            ],
            "size": {
                "0": 394.78350830078125,
                "1": 163.26902770996094
            },
            "flags": {},
            "order": 17,
            "mode": 0,
            "inputs": [
                {
                    "name": "clip",
                    "type": "CLIP",
                    "link": 57
                }
            ],
            "outputs": [
                {
                    "name": "CONDITIONING",
                    "type": "CONDITIONING",
                    "links": [
                        113
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "CLIPTextEncode"
            },
            "widgets_values": [
                "a portrait of a woman"
            ],
            "color": "#232",
            "bgcolor": "#353"
        },
        {
            "id": 38,
            "type": "CLIPTextEncode",
            "pos": [
                -185,
                1291
            ],
            "size": {
                "0": 377,
                "1": 107
            },
            "flags": {},
            "order": 18,
            "mode": 0,
            "inputs": [
                {
                    "name": "clip",
                    "type": "CLIP",
                    "link": 58
                }
            ],
            "outputs": [
                {
                    "name": "CONDITIONING",
                    "type": "CONDITIONING",
                    "links": [
                        114
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "CLIPTextEncode"
            },
            "widgets_values": [
                ""
            ],
            "color": "#322",
            "bgcolor": "#533"
        },
        {
            "id": 71,
            "type": "Reroute",
            "pos": [
                1850,
                1011
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 30,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 103
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "VAE",
                    "links": [
                        117
                    ],
                    "label": "VAE",
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#332922",
            "bgcolor": "#593930"
        },
        {
            "id": 41,
            "type": "PreviewImage",
            "pos": [
                2147,
                1380
            ],
            "size": {
                "0": 437,
                "1": 402
            },
            "flags": {},
            "order": 78,
            "mode": 0,
            "inputs": [
                {
                    "name": "images",
                    "type": "IMAGE",
                    "link": 120
                }
            ],
            "title": "Output",
            "properties": {
                "Node name for S&R": "PreviewImage"
            },
            "color": "#432",
            "bgcolor": "#653"
        },
        {
            "id": 40,
            "type": "VAEDecode",
            "pos": [
                2145,
                1040
            ],
            "size": {
                "0": 210,
                "1": 46
            },
            "flags": {
                "collapsed": true
            },
            "order": 75,
            "mode": 0,
            "inputs": [
                {
                    "name": "samples",
                    "type": "LATENT",
                    "link": 118
                },
                {
                    "name": "vae",
                    "type": "VAE",
                    "link": 117
                }
            ],
            "outputs": [
                {
                    "name": "IMAGE",
                    "type": "IMAGE",
                    "links": [
                        119
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "VAEDecode"
            },
            "color": "#332922",
            "bgcolor": "#593930"
        },
        {
            "id": 87,
            "type": "SetLatentNoiseMask",
            "pos": [
                -222.45444557883525,
                1605.9088911576705
            ],
            "size": {
                "0": 210,
                "1": 46
            },
            "flags": {
                "pinned": true
            },
            "order": 45,
            "mode": 0,
            "inputs": [
                {
                    "name": "samples",
                    "type": "LATENT",
                    "link": 130
                },
                {
                    "name": "mask",
                    "type": "MASK",
                    "link": null
                }
            ],
            "outputs": [
                {
                    "name": "LATENT",
                    "type": "LATENT",
                    "links": [
                        135
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "SetLatentNoiseMask"
            }
        },
        {
            "id": 97,
            "type": "SetLatentNoiseMask",
            "pos": [
                -222.45444557883525,
                1695.9088911576705
            ],
            "size": {
                "0": 210,
                "1": 46
            },
            "flags": {
                "pinned": true
            },
            "order": 47,
            "mode": 0,
            "inputs": [
                {
                    "name": "samples",
                    "type": "LATENT",
                    "link": 138
                },
                {
                    "name": "mask",
                    "type": "MASK",
                    "link": 139
                }
            ],
            "outputs": [
                {
                    "name": "LATENT",
                    "type": "LATENT",
                    "links": [
                        140
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "SetLatentNoiseMask"
            }
        },
        {
            "id": 75,
            "type": "Reroute",
            "pos": [
                380,
                1940
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 64,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 143
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "LATENT",
                    "links": [
                        111
                    ],
                    "slot_index": 0,
                    "label": "latent"
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#323",
            "bgcolor": "#535"
        },
        {
            "id": 99,
            "type": "Reroute",
            "pos": [
                37.545554421164766,
                1695.9088911576705
            ],
            "size": [
                75,
                26
            ],
            "flags": {
                "pinned": true
            },
            "order": 57,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 141
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "LATENT",
                    "links": [],
                    "label": "empty",
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#323",
            "bgcolor": "#535"
        },
        {
            "id": 92,
            "type": "Reroute",
            "pos": [
                37.545554421164766,
                1585.9088911576705
            ],
            "size": [
                75,
                26
            ],
            "flags": {
                "pinned": true
            },
            "order": 46,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 136
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "LATENT",
                    "links": [],
                    "label": "input",
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#323",
            "bgcolor": "#535"
        },
        {
            "id": 91,
            "type": "Reroute",
            "pos": [
                37.545554421164766,
                1625.9088911576705
            ],
            "size": [
                75,
                26
            ],
            "flags": {
                "pinned": true
            },
            "order": 55,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 135
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "LATENT",
                    "links": null,
                    "label": "masked",
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#232",
            "bgcolor": "#353"
        },
        {
            "id": 98,
            "type": "Reroute",
            "pos": [
                37.545554421164766,
                1655.9088911576705
            ],
            "size": [
                75,
                26
            ],
            "flags": {
                "pinned": true
            },
            "order": 56,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 140
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "LATENT",
                    "links": [
                        145
                    ],
                    "label": "inverted",
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#432",
            "bgcolor": "#653"
        },
        {
            "id": 88,
            "type": "VAEEncode",
            "pos": [
                -462.45444557883513,
                1605.9088911576705
            ],
            "size": {
                "0": 210,
                "1": 46
            },
            "flags": {
                "pinned": true
            },
            "order": 39,
            "mode": 0,
            "inputs": [
                {
                    "name": "pixels",
                    "type": "IMAGE",
                    "link": 147
                },
                {
                    "name": "vae",
                    "type": "VAE",
                    "link": 132
                }
            ],
            "outputs": [
                {
                    "name": "LATENT",
                    "type": "LATENT",
                    "links": [
                        130,
                        136,
                        138
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "VAEEncode"
            }
        },
        {
            "id": 100,
            "type": "Reroute",
            "pos": [
                180,
                1778
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 61,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 145,
                    "pos": [
                        37.5,
                        0
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "LATENT",
                    "links": [
                        143
                    ],
                    "slot_index": 0,
                    "label": "latent"
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": true
            },
            "color": "#323",
            "bgcolor": "#535"
        },
        {
            "id": 89,
            "type": "Reroute",
            "pos": [
                -642.4544455788352,
                1621.9088911576705
            ],
            "size": [
                75,
                26
            ],
            "flags": {
                "pinned": true
            },
            "order": 20,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 134
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "VAE",
                    "links": [
                        132
                    ],
                    "slot_index": 0,
                    "label": "VAE"
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#332922",
            "bgcolor": "#593930"
        },
        {
            "id": 79,
            "type": "Reroute",
            "pos": [
                -760,
                1420
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 34,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 115
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "IMAGE",
                    "links": [
                        116,
                        146
                    ],
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#222",
            "bgcolor": "#000"
        },
        {
            "id": 49,
            "type": "Reroute",
            "pos": [
                -1698,
                1603
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 19,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 149
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "IMAGE",
                    "links": [
                        121,
                        125
                    ],
                    "slot_index": 0,
                    "label": "INPUT"
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#222",
            "bgcolor": "#000"
        },
        {
            "id": 84,
            "type": "Reroute",
            "pos": [
                -1242,
                1614
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 28,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 125
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "IMAGE",
                    "links": null,
                    "label": "INPUT"
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#222",
            "bgcolor": "#000"
        },
        {
            "id": 101,
            "type": "Reroute",
            "pos": [
                -643.4544455788352,
                1585.9088911576705
            ],
            "size": [
                75,
                26
            ],
            "flags": {
                "pinned": true
            },
            "order": 36,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 146
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "IMAGE",
                    "links": [
                        147,
                        152
                    ],
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#222",
            "bgcolor": "#000"
        },
        {
            "id": 94,
            "type": "InvertMask",
            "pos": [
                -462.45444557883513,
                1706.9088911576705
            ],
            "size": {
                "0": 210,
                "1": 26
            },
            "flags": {
                "pinned": true
            },
            "order": 14,
            "mode": 0,
            "inputs": [
                {
                    "name": "mask",
                    "type": "MASK",
                    "link": 137
                }
            ],
            "outputs": [
                {
                    "name": "MASK",
                    "type": "MASK",
                    "links": [
                        139
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "InvertMask"
            }
        },
        {
            "id": 57,
            "type": "ImageScaleToTotalPixels",
            "pos": [
                -1108,
                1554
            ],
            "size": {
                "0": 315,
                "1": 82
            },
            "flags": {},
            "order": 32,
            "mode": 0,
            "inputs": [
                {
                    "name": "image",
                    "type": "IMAGE",
                    "link": 127
                }
            ],
            "outputs": [
                {
                    "name": "IMAGE",
                    "type": "IMAGE",
                    "links": [
                        115
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "ImageScaleToTotalPixels"
            },
            "widgets_values": [
                "bilinear",
                0.262
            ],
            "color": "#222",
            "bgcolor": "#000"
        },
        {
            "id": 47,
            "type": "LoadImage",
            "pos": [
                -641,
                990
            ],
            "size": {
                "0": 402.1015625,
                "1": 525.2821044921875
            },
            "flags": {},
            "order": 4,
            "mode": 0,
            "inputs": [],
            "outputs": [
                {
                    "name": "IMAGE",
                    "type": "IMAGE",
                    "links": [
                        148
                    ],
                    "shape": 3,
                    "slot_index": 0
                },
                {
                    "name": "MASK",
                    "type": "MASK",
                    "links": null,
                    "shape": 3
                }
            ],
            "title": "INPUT",
            "properties": {
                "Node name for S&R": "LoadImage"
            },
            "widgets_values": [
                "face2 (2).png",
                "image"
            ],
            "color": "#222",
            "bgcolor": "#000"
        },
        {
            "id": 85,
            "type": "Reroute",
            "pos": [
                -1240,
                1659
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 31,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 126
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "IMAGE",
                    "links": [
                        127,
                        128
                    ],
                    "slot_index": 0,
                    "label": "faces"
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#233",
            "bgcolor": "#355"
        },
        {
            "id": 81,
            "type": "FaceRestoreCFWithModel",
            "pos": [
                -1594,
                1692
            ],
            "size": {
                "0": 315,
                "1": 102
            },
            "flags": {},
            "order": 27,
            "mode": 0,
            "inputs": [
                {
                    "name": "facerestore_model",
                    "type": "FACERESTORE_MODEL",
                    "link": 122,
                    "slot_index": 0
                },
                {
                    "name": "image",
                    "type": "IMAGE",
                    "link": 121
                }
            ],
            "outputs": [
                {
                    "name": "IMAGE",
                    "type": "IMAGE",
                    "links": [
                        126
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "FaceRestoreCFWithModel"
            },
            "widgets_values": [
                "retinaface_resnet50",
                0.98
            ],
            "color": "#233",
            "bgcolor": "#355"
        },
        {
            "id": 103,
            "type": "Reroute",
            "pos": [
                -739,
                944
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 13,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 150
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "VAE",
                    "links": [
                        151
                    ],
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#332922",
            "bgcolor": "#593930"
        },
        {
            "id": 36,
            "type": "VAELoader",
            "pos": [
                -1089,
                1282
            ],
            "size": {
                "0": 315,
                "1": 58
            },
            "flags": {},
            "order": 5,
            "mode": 0,
            "outputs": [
                {
                    "name": "VAE",
                    "type": "VAE",
                    "links": [
                        133,
                        150
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "VAELoader"
            },
            "widgets_values": [
                "vae-ft-mse-840000-ema-pruned.safetensors"
            ],
            "color": "#332922",
            "bgcolor": "#593930"
        },
        {
            "id": 83,
            "type": "PreviewImage",
            "pos": [
                -1109,
                1686
            ],
            "size": {
                "0": 402.1416320800781,
                "1": 496.2021179199219
            },
            "flags": {},
            "order": 33,
            "mode": 0,
            "inputs": [
                {
                    "name": "images",
                    "type": "IMAGE",
                    "link": 128
                }
            ],
            "title": "Faces",
            "properties": {
                "Node name for S&R": "PreviewImage"
            },
            "color": "#233",
            "bgcolor": "#355"
        },
        {
            "id": 82,
            "type": "FaceRestoreModelLoader",
            "pos": [
                -1951,
                1690
            ],
            "size": {
                "0": 315,
                "1": 58
            },
            "flags": {},
            "order": 6,
            "mode": 0,
            "outputs": [
                {
                    "name": "FACERESTORE_MODEL",
                    "type": "FACERESTORE_MODEL",
                    "links": [
                        122
                    ],
                    "shape": 3
                }
            ],
            "properties": {
                "Node name for S&R": "FaceRestoreModelLoader"
            },
            "widgets_values": [
                "codeformer-v0.1.0.pth"
            ],
            "color": "#233",
            "bgcolor": "#355"
        },
        {
            "id": 102,
            "type": "Reroute",
            "pos": [
                -1800,
                1437
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 11,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 148,
                    "pos": [
                        37.5,
                        0
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "IMAGE",
                    "links": [
                        149
                    ],
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": true
            },
            "color": "#222",
            "bgcolor": "#000"
        },
        {
            "id": 96,
            "type": "LoadImage",
            "pos": [
                -589,
                1786
            ],
            "size": {
                "0": 330.9345397949219,
                "1": 385.59246826171875
            },
            "flags": {
                "pinned": true
            },
            "order": 7,
            "mode": 0,
            "inputs": [],
            "outputs": [
                {
                    "name": "IMAGE",
                    "type": "IMAGE",
                    "links": [],
                    "shape": 3,
                    "slot_index": 0
                },
                {
                    "name": "MASK",
                    "type": "MASK",
                    "links": [
                        137
                    ],
                    "shape": 3,
                    "slot_index": 1
                }
            ],
            "title": "MASK",
            "properties": {
                "Node name for S&R": "LoadImage"
            },
            "widgets_values": [
                "clipspace/clipspace-mask-2303060.png [input]",
                "image"
            ],
            "color": "#232",
            "bgcolor": "#353"
        },
        {
            "id": 105,
            "type": "Reroute",
            "pos": [
                45,
                1955
            ],
            "size": [
                75,
                26
            ],
            "flags": {
                "pinned": true
            },
            "order": 48,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 155
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "INT",
                    "links": [
                        175
                    ],
                    "label": "width",
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#223",
            "bgcolor": "#335"
        },
        {
            "id": 106,
            "type": "Reroute",
            "pos": [
                46,
                1991
            ],
            "size": [
                75,
                26
            ],
            "flags": {
                "pinned": true
            },
            "order": 50,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 156
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "INT",
                    "links": [
                        176
                    ],
                    "label": "height",
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#223",
            "bgcolor": "#335"
        },
        {
            "id": 104,
            "type": "GetImageSize",
            "pos": [
                -208,
                1962
            ],
            "size": {
                "0": 210,
                "1": 46
            },
            "flags": {
                "pinned": true
            },
            "order": 40,
            "mode": 0,
            "inputs": [
                {
                    "name": "image",
                    "type": "IMAGE",
                    "link": 152
                }
            ],
            "outputs": [
                {
                    "name": "width",
                    "type": "INT",
                    "links": [
                        153,
                        155
                    ],
                    "shape": 3,
                    "slot_index": 0
                },
                {
                    "name": "height",
                    "type": "INT",
                    "links": [
                        154,
                        156
                    ],
                    "shape": 3,
                    "slot_index": 1
                }
            ],
            "properties": {
                "Node name for S&R": "GetImageSize"
            },
            "color": "#223",
            "bgcolor": "#335"
        },
        {
            "id": 90,
            "type": "Reroute",
            "pos": [
                -759,
                1540
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 12,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 133,
                    "pos": [
                        37.5,
                        0
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "VAE",
                    "links": [
                        134,
                        157
                    ],
                    "slot_index": 0,
                    "label": "VAE"
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": true
            },
            "color": "#332922",
            "bgcolor": "#593930"
        },
        {
            "id": 80,
            "type": "Reroute",
            "pos": [
                2464,
                1010
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 77,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 119
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "IMAGE",
                    "links": [
                        120,
                        158
                    ],
                    "slot_index": 0,
                    "label": "output"
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#432",
            "bgcolor": "#653"
        },
        {
            "id": 109,
            "type": "Reroute",
            "pos": [
                380,
                1990
            ],
            "size": [
                75,
                26
            ],
            "flags": {
                "pinned": true
            },
            "order": 80,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 160
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "IMAGE",
                    "links": [],
                    "label": "output",
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#432",
            "bgcolor": "#653"
        },
        {
            "id": 107,
            "type": "Reroute",
            "pos": [
                -558,
                2217
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 21,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 157
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "VAE",
                    "links": [
                        161
                    ],
                    "label": "VAE",
                    "slot_index": 0
                }
            ],
            "title": "VAE",
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#332922",
            "bgcolor": "#593930"
        },
        {
            "id": 35,
            "type": "CheckpointLoaderSimple",
            "pos": [
                -631,
                846
            ],
            "size": {
                "0": 315,
                "1": 98
            },
            "flags": {},
            "order": 8,
            "mode": 0,
            "outputs": [
                {
                    "name": "MODEL",
                    "type": "MODEL",
                    "links": [
                        104,
                        163
                    ],
                    "shape": 3,
                    "slot_index": 0
                },
                {
                    "name": "CLIP",
                    "type": "CLIP",
                    "links": [
                        57,
                        58
                    ],
                    "shape": 3,
                    "slot_index": 1
                },
                {
                    "name": "VAE",
                    "type": "VAE",
                    "links": null,
                    "shape": 3
                }
            ],
            "properties": {
                "Node name for S&R": "CheckpointLoaderSimple"
            },
            "widgets_values": [
                "Realistic_Vision_V5.1_fp16-no-ema.safetensors"
            ],
            "color": "#223",
            "bgcolor": "#335"
        },
        {
            "id": 112,
            "type": "Reroute",
            "pos": [
                380,
                2030
            ],
            "size": [
                75,
                26
            ],
            "flags": {
                "pinned": true
            },
            "order": 24,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 164
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "MODEL",
                    "links": [
                        170
                    ],
                    "label": "model",
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#223",
            "bgcolor": "#335"
        },
        {
            "id": 113,
            "type": "Reroute",
            "pos": [
                1979,
                1631
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 68,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 165,
                    "pos": [
                        37.5,
                        0
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "CONDITIONING",
                    "links": [
                        167
                    ],
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": true
            },
            "color": "#232",
            "bgcolor": "#353"
        },
        {
            "id": 115,
            "type": "Reroute",
            "pos": [
                381,
                2066
            ],
            "size": [
                75,
                26
            ],
            "flags": {
                "pinned": true
            },
            "order": 71,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 167
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "CONDITIONING",
                    "links": [
                        171
                    ],
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#232",
            "bgcolor": "#353"
        },
        {
            "id": 114,
            "type": "Reroute",
            "pos": [
                1897,
                1631
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 69,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 166,
                    "pos": [
                        37.5,
                        0
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "CONDITIONING",
                    "links": [
                        168
                    ],
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": true
            },
            "color": "#322",
            "bgcolor": "#533"
        },
        {
            "id": 116,
            "type": "Reroute",
            "pos": [
                380,
                2109
            ],
            "size": [
                75,
                26
            ],
            "flags": {
                "pinned": true
            },
            "order": 72,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 168
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "CONDITIONING",
                    "links": [
                        172
                    ],
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#322",
            "bgcolor": "#533"
        },
        {
            "id": 39,
            "type": "KSampler",
            "pos": [
                2142,
                1075
            ],
            "size": {
                "0": 315,
                "1": 262
            },
            "flags": {},
            "order": 73,
            "mode": 0,
            "inputs": [
                {
                    "name": "model",
                    "type": "MODEL",
                    "link": 106
                },
                {
                    "name": "positive",
                    "type": "CONDITIONING",
                    "link": 107
                },
                {
                    "name": "negative",
                    "type": "CONDITIONING",
                    "link": 108
                },
                {
                    "name": "latent_image",
                    "type": "LATENT",
                    "link": 109,
                    "slot_index": 3
                }
            ],
            "outputs": [
                {
                    "name": "LATENT",
                    "type": "LATENT",
                    "links": [
                        118
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "KSampler"
            },
            "widgets_values": [
                80482747885273,
                "randomize",
                17,
                6.5,
                "dpmpp_2m",
                "karras",
                0.49999999999999956
            ]
        },
        {
            "id": 119,
            "type": "PreviewImage",
            "pos": [
                870,
                2040
            ],
            "size": {
                "0": 489.4833984375,
                "1": 582.8953857421875
            },
            "flags": {},
            "order": 76,
            "mode": 0,
            "inputs": [
                {
                    "name": "images",
                    "type": "IMAGE",
                    "link": 177
                }
            ],
            "properties": {
                "Node name for S&R": "PreviewImage"
            },
            "color": "#323",
            "bgcolor": "#535"
        },
        {
            "id": 59,
            "type": "ControlNetApplyAdvanced",
            "pos": [
                779.9659335859385,
                1245.3481964062491
            ],
            "size": {
                "0": 315,
                "1": 166
            },
            "flags": {
                "pinned": false
            },
            "order": 54,
            "mode": 0,
            "inputs": [
                {
                    "name": "positive",
                    "type": "CONDITIONING",
                    "link": 92
                },
                {
                    "name": "negative",
                    "type": "CONDITIONING",
                    "link": 93
                },
                {
                    "name": "control_net",
                    "type": "CONTROL_NET",
                    "link": 91,
                    "slot_index": 2
                },
                {
                    "name": "image",
                    "type": "IMAGE",
                    "link": 85
                }
            ],
            "outputs": [
                {
                    "name": "positive",
                    "type": "CONDITIONING",
                    "links": [
                        94
                    ],
                    "shape": 3,
                    "slot_index": 0
                },
                {
                    "name": "negative",
                    "type": "CONDITIONING",
                    "links": [
                        95
                    ],
                    "shape": 3,
                    "slot_index": 1
                }
            ],
            "properties": {
                "Node name for S&R": "ControlNetApplyAdvanced"
            },
            "widgets_values": [
                0.4499999999999995,
                0,
                1
            ],
            "color": "#2a363b",
            "bgcolor": "#3f5159"
        },
        {
            "id": 42,
            "type": "EmptyLatentImage",
            "pos": [
                -221,
                1786
            ],
            "size": {
                "0": 229.1444091796875,
                "1": 106
            },
            "flags": {
                "pinned": true
            },
            "order": 49,
            "mode": 0,
            "inputs": [
                {
                    "name": "width",
                    "type": "INT",
                    "link": 153,
                    "widget": {
                        "name": "width",
                        "config": [
                            "INT",
                            {
                                "default": 512,
                                "min": 64,
                                "max": 8192,
                                "step": 8
                            }
                        ]
                    }
                },
                {
                    "name": "height",
                    "type": "INT",
                    "link": 154,
                    "widget": {
                        "name": "height",
                        "config": [
                            "INT",
                            {
                                "default": 512,
                                "min": 64,
                                "max": 8192,
                                "step": 8
                            }
                        ]
                    }
                }
            ],
            "outputs": [
                {
                    "name": "LATENT",
                    "type": "LATENT",
                    "links": [
                        141
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "EmptyLatentImage"
            },
            "widgets_values": [
                512,
                512,
                1
            ]
        },
        {
            "id": 110,
            "type": "Reroute",
            "pos": [
                320,
                2174
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 29,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 161
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "VAE",
                    "links": [
                        173
                    ],
                    "label": "VAE",
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            },
            "color": "#332922",
            "bgcolor": "#593930"
        },
        {
            "id": 118,
            "type": "UpscaleModelLoader",
            "pos": [
                192,
                2253
            ],
            "size": {
                "0": 315,
                "1": 58
            },
            "flags": {},
            "order": 9,
            "mode": 0,
            "outputs": [
                {
                    "name": "UPSCALE_MODEL",
                    "type": "UPSCALE_MODEL",
                    "links": [
                        174
                    ],
                    "shape": 3
                }
            ],
            "properties": {
                "Node name for S&R": "UpscaleModelLoader"
            },
            "widgets_values": [
                "4x_Valar_v1.pth"
            ],
            "color": "#323",
            "bgcolor": "#535"
        },
        {
            "id": 108,
            "type": "Reroute",
            "pos": [
                2530,
                1310
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 79,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 158,
                    "pos": [
                        37.5,
                        0
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "IMAGE",
                    "links": [
                        160,
                        178
                    ],
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": true
            },
            "color": "#432",
            "bgcolor": "#653"
        },
        {
            "id": 117,
            "type": "UltimateSDUpscale",
            "pos": [
                540,
                2040
            ],
            "size": {
                "0": 315,
                "1": 590
            },
            "flags": {},
            "order": 74,
            "mode": 0,
            "inputs": [
                {
                    "name": "image",
                    "type": "IMAGE",
                    "link": null
                },
                {
                    "name": "model",
                    "type": "MODEL",
                    "link": 170
                },
                {
                    "name": "positive",
                    "type": "CONDITIONING",
                    "link": 171
                },
                {
                    "name": "negative",
                    "type": "CONDITIONING",
                    "link": 172
                },
                {
                    "name": "vae",
                    "type": "VAE",
                    "link": 173
                },
                {
                    "name": "upscale_model",
                    "type": "UPSCALE_MODEL",
                    "link": 174,
                    "slot_index": 5
                },
                {
                    "name": "tile_width",
                    "type": "INT",
                    "link": 175,
                    "widget": {
                        "name": "tile_width",
                        "config": [
                            "INT",
                            {
                                "default": 512,
                                "min": 64,
                                "max": 8192,
                                "step": 8
                            }
                        ]
                    }
                },
                {
                    "name": "tile_height",
                    "type": "INT",
                    "link": 176,
                    "widget": {
                        "name": "tile_height",
                        "config": [
                            "INT",
                            {
                                "default": 512,
                                "min": 64,
                                "max": 8192,
                                "step": 8
                            }
                        ]
                    }
                }
            ],
            "outputs": [
                {
                    "name": "IMAGE",
                    "type": "IMAGE",
                    "links": [
                        177
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "UltimateSDUpscale"
            },
            "widgets_values": [
                2,
                159,
                "fixed",
                15,
                8.5,
                "dpmpp_sde",
                "karras",
                0.2199999999999999,
                "Chess",
                512,
                512,
                8,
                48,
                "None",
                1,
                64,
                8,
                16,
                "enable"
            ],
            "color": "#323",
            "bgcolor": "#535"
        },
        {
            "id": 121,
            "type": "PreviewImage",
            "pos": [
                1375,
                2045
            ],
            "size": [
                528.450847496033,
                583.8632275390628
            ],
            "flags": {},
            "order": 82,
            "mode": 0,
            "inputs": [
                {
                    "name": "images",
                    "type": "IMAGE",
                    "link": 179
                }
            ],
            "properties": {
                "Node name for S&R": "PreviewImage"
            }
        },
        {
            "id": 120,
            "type": "ImageUpscaleWithModel",
            "pos": [
                1950,
                2050
            ],
            "size": {
                "0": 241.79998779296875,
                "1": 46
            },
            "flags": {},
            "order": 81,
            "mode": 0,
            "inputs": [
                {
                    "name": "upscale_model",
                    "type": "UPSCALE_MODEL",
                    "link": 180,
                    "slot_index": 0
                },
                {
                    "name": "image",
                    "type": "IMAGE",
                    "link": 178
                }
            ],
            "outputs": [
                {
                    "name": "IMAGE",
                    "type": "IMAGE",
                    "links": [
                        179
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "ImageUpscaleWithModel"
            }
        },
        {
            "id": 122,
            "type": "UpscaleModelLoader",
            "pos": [
                1970,
                2010
            ],
            "size": {
                "0": 315,
                "1": 58
            },
            "flags": {
                "collapsed": true
            },
            "order": 10,
            "mode": 0,
            "outputs": [
                {
                    "name": "UPSCALE_MODEL",
                    "type": "UPSCALE_MODEL",
                    "links": [
                        180
                    ],
                    "shape": 3
                }
            ],
            "properties": {
                "Node name for S&R": "UpscaleModelLoader"
            },
            "widgets_values": [
                "4xESRGAN.pth"
            ]
        },
        {
            "id": 111,
            "type": "Reroute",
            "pos": [
                241,
                1108
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 16,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 163,
                    "pos": [
                        37.5,
                        0
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "MODEL",
                    "links": [
                        164
                    ],
                    "label": "model",
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": true
            },
            "color": "#223",
            "bgcolor": "#335"
        }
    ],
    "links": [
        [
            57,
            35,
            1,
            37,
            0,
            "CLIP"
        ],
        [
            58,
            35,
            1,
            38,
            0,
            "CLIP"
        ],
        [
            69,
            48,
            0,
            45,
            0,
            "IMAGE"
        ],
        [
            72,
            48,
            0,
            50,
            0,
            "*"
        ],
        [
            73,
            50,
            0,
            51,
            0,
            "*"
        ],
        [
            74,
            51,
            0,
            52,
            0,
            "*"
        ],
        [
            75,
            51,
            0,
            44,
            0,
            "IMAGE"
        ],
        [
            76,
            50,
            0,
            46,
            0,
            "IMAGE"
        ],
        [
            77,
            52,
            0,
            43,
            0,
            "IMAGE"
        ],
        [
            78,
            45,
            0,
            53,
            0,
            "IMAGE"
        ],
        [
            79,
            46,
            0,
            54,
            0,
            "IMAGE"
        ],
        [
            80,
            44,
            0,
            55,
            0,
            "IMAGE"
        ],
        [
            81,
            43,
            0,
            56,
            0,
            "IMAGE"
        ],
        [
            84,
            45,
            0,
            58,
            3,
            "IMAGE"
        ],
        [
            85,
            46,
            0,
            59,
            3,
            "IMAGE"
        ],
        [
            86,
            44,
            0,
            60,
            3,
            "IMAGE"
        ],
        [
            87,
            43,
            0,
            61,
            3,
            "IMAGE"
        ],
        [
            88,
            62,
            0,
            58,
            2,
            "CONTROL_NET"
        ],
        [
            89,
            65,
            0,
            61,
            2,
            "CONTROL_NET"
        ],
        [
            90,
            64,
            0,
            60,
            2,
            "CONTROL_NET"
        ],
        [
            91,
            63,
            0,
            59,
            2,
            "CONTROL_NET"
        ],
        [
            92,
            58,
            0,
            59,
            0,
            "CONDITIONING"
        ],
        [
            93,
            58,
            1,
            59,
            1,
            "CONDITIONING"
        ],
        [
            94,
            59,
            0,
            60,
            0,
            "CONDITIONING"
        ],
        [
            95,
            59,
            1,
            60,
            1,
            "CONDITIONING"
        ],
        [
            96,
            60,
            0,
            61,
            0,
            "CONDITIONING"
        ],
        [
            97,
            60,
            1,
            61,
            1,
            "CONDITIONING"
        ],
        [
            98,
            66,
            0,
            58,
            0,
            "CONDITIONING"
        ],
        [
            99,
            67,
            0,
            58,
            1,
            "CONDITIONING"
        ],
        [
            100,
            61,
            0,
            68,
            0,
            "*"
        ],
        [
            101,
            61,
            1,
            69,
            0,
            "*"
        ],
        [
            103,
            70,
            0,
            71,
            0,
            "*"
        ],
        [
            104,
            35,
            0,
            72,
            0,
            "*"
        ],
        [
            105,
            72,
            0,
            73,
            0,
            "*"
        ],
        [
            106,
            73,
            0,
            39,
            0,
            "MODEL"
        ],
        [
            107,
            68,
            0,
            39,
            1,
            "CONDITIONING"
        ],
        [
            108,
            69,
            0,
            39,
            2,
            "CONDITIONING"
        ],
        [
            109,
            74,
            0,
            39,
            3,
            "LATENT"
        ],
        [
            111,
            75,
            0,
            76,
            0,
            "*"
        ],
        [
            112,
            76,
            0,
            74,
            0,
            "*"
        ],
        [
            113,
            37,
            0,
            66,
            0,
            "*"
        ],
        [
            114,
            38,
            0,
            67,
            0,
            "*"
        ],
        [
            115,
            57,
            0,
            79,
            0,
            "*"
        ],
        [
            116,
            79,
            0,
            48,
            0,
            "*"
        ],
        [
            117,
            71,
            0,
            40,
            1,
            "VAE"
        ],
        [
            118,
            39,
            0,
            40,
            0,
            "LATENT"
        ],
        [
            119,
            40,
            0,
            80,
            0,
            "*"
        ],
        [
            120,
            80,
            0,
            41,
            0,
            "IMAGE"
        ],
        [
            121,
            49,
            0,
            81,
            1,
            "IMAGE"
        ],
        [
            122,
            82,
            0,
            81,
            0,
            "FACERESTORE_MODEL"
        ],
        [
            125,
            49,
            0,
            84,
            0,
            "*"
        ],
        [
            126,
            81,
            0,
            85,
            0,
            "*"
        ],
        [
            127,
            85,
            0,
            57,
            0,
            "IMAGE"
        ],
        [
            128,
            85,
            0,
            83,
            0,
            "IMAGE"
        ],
        [
            130,
            88,
            0,
            87,
            0,
            "LATENT"
        ],
        [
            132,
            89,
            0,
            88,
            1,
            "VAE"
        ],
        [
            133,
            36,
            0,
            90,
            0,
            "*"
        ],
        [
            134,
            90,
            0,
            89,
            0,
            "*"
        ],
        [
            135,
            87,
            0,
            91,
            0,
            "*"
        ],
        [
            136,
            88,
            0,
            92,
            0,
            "*"
        ],
        [
            137,
            96,
            1,
            94,
            0,
            "MASK"
        ],
        [
            138,
            88,
            0,
            97,
            0,
            "LATENT"
        ],
        [
            139,
            94,
            0,
            97,
            1,
            "MASK"
        ],
        [
            140,
            97,
            0,
            98,
            0,
            "*"
        ],
        [
            141,
            42,
            0,
            99,
            0,
            "*"
        ],
        [
            143,
            100,
            0,
            75,
            0,
            "*"
        ],
        [
            145,
            98,
            0,
            100,
            0,
            "*"
        ],
        [
            146,
            79,
            0,
            101,
            0,
            "*"
        ],
        [
            147,
            101,
            0,
            88,
            0,
            "IMAGE"
        ],
        [
            148,
            47,
            0,
            102,
            0,
            "*"
        ],
        [
            149,
            102,
            0,
            49,
            0,
            "*"
        ],
        [
            150,
            36,
            0,
            103,
            0,
            "*"
        ],
        [
            151,
            103,
            0,
            70,
            0,
            "*"
        ],
        [
            152,
            101,
            0,
            104,
            0,
            "IMAGE"
        ],
        [
            153,
            104,
            0,
            42,
            0,
            "INT"
        ],
        [
            154,
            104,
            1,
            42,
            1,
            "INT"
        ],
        [
            155,
            104,
            0,
            105,
            0,
            "*"
        ],
        [
            156,
            104,
            1,
            106,
            0,
            "*"
        ],
        [
            157,
            90,
            0,
            107,
            0,
            "*"
        ],
        [
            158,
            80,
            0,
            108,
            0,
            "*"
        ],
        [
            160,
            108,
            0,
            109,
            0,
            "*"
        ],
        [
            161,
            107,
            0,
            110,
            0,
            "*"
        ],
        [
            163,
            35,
            0,
            111,
            0,
            "*"
        ],
        [
            164,
            111,
            0,
            112,
            0,
            "*"
        ],
        [
            165,
            68,
            0,
            113,
            0,
            "*"
        ],
        [
            166,
            69,
            0,
            114,
            0,
            "*"
        ],
        [
            167,
            113,
            0,
            115,
            0,
            "*"
        ],
        [
            168,
            114,
            0,
            116,
            0,
            "*"
        ],
        [
            170,
            112,
            0,
            117,
            1,
            "MODEL"
        ],
        [
            171,
            115,
            0,
            117,
            2,
            "CONDITIONING"
        ],
        [
            172,
            116,
            0,
            117,
            3,
            "CONDITIONING"
        ],
        [
            173,
            110,
            0,
            117,
            4,
            "VAE"
        ],
        [
            174,
            118,
            0,
            117,
            5,
            "UPSCALE_MODEL"
        ],
        [
            175,
            105,
            0,
            117,
            6,
            "INT"
        ],
        [
            176,
            106,
            0,
            117,
            7,
            "INT"
        ],
        [
            177,
            117,
            0,
            119,
            0,
            "IMAGE"
        ],
        [
            178,
            108,
            0,
            120,
            1,
            "IMAGE"
        ],
        [
            179,
            120,
            0,
            121,
            0,
            "IMAGE"
        ],
        [
            180,
            122,
            0,
            120,
            0,
            "UPSCALE_MODEL"
        ]
    ],
    "groups": [
        {
            "title": "ControlNet",
            "bounding": [
                339,
                1052,
                1541,
                841
            ],
            "color": "#3f789e"
        },
        {
            "title": "Latent",
            "bounding": [
                -612,
                1529,
                687,
                657
            ],
            "color": "#a1309b"
        }
    ],
    "config": {},
    "extra": {},
    "version": 0.4
};
