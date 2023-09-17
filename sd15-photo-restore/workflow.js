export const defaultGraph = {
    "last_node_id": 165,
    "last_link_id": 288,
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
            "order": 82,
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
            "order": 77,
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
            "order": 90,
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
            "order": 101,
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
            "order": 76,
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
                "1": 106
            },
            "flags": {
                "pinned": true
            },
            "order": 83,
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
                "1": 82
            },
            "flags": {
                "pinned": true
            },
            "order": 91,
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
                "1": 130
            },
            "flags": {
                "pinned": true
            },
            "order": 97,
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
            "order": 99,
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
            "order": 46,
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
            "order": 104,
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
            "order": 102,
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
            "order": 105,
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
            "order": 74,
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
            "order": 98,
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
            "order": 92,
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
            "order": 81,
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
            "order": 80,
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
            "order": 48,
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
            "order": 38,
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
            "order": 44,
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
            "order": 28,
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
            "order": 109,
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
            "order": 106,
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
            "order": 52,
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
            "order": 111,
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
            "order": 84,
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
            "order": 86,
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
            "order": 103,
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
            "order": 96,
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
            "order": 85,
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
            "order": 94,
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
            "order": 95,
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
            "order": 78,
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
            "order": 100,
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
            "order": 36,
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
            "order": 73,
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
            "order": 54,
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
            "order": 75,
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
            "order": 22,
            "mode": 0,
            "inputs": [
                {
                    "name": "mask",
                    "type": "MASK",
                    "link": 223
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
            "order": 64,
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
            "order": 4,
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
            "order": 69,
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
            "order": 5,
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
                        223
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
                "2 (5).jpg",
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
            "order": 87,
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
            "order": 89,
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
            "order": 79,
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
            "order": 20,
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
            "order": 115,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 268
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "IMAGE",
                    "links": [
                        217
                    ],
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
            "order": 37,
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
            "order": 45,
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
                        170,
                        259
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
            "order": 108,
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
                    "links": [],
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
            "order": 93,
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
            "order": 88,
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
            "order": 114,
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
            "id": 121,
            "type": "PreviewImage",
            "pos": [
                1375,
                2045
            ],
            "size": {
                "0": 528.4508666992188,
                "1": 583.8632202148438
            },
            "flags": {
                "pinned": true
            },
            "order": 118,
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
            "order": 29,
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
        },
        {
            "id": 126,
            "type": "ImageScaleToTotalPixels",
            "pos": [
                667.9118517444522,
                300.5995276108204
            ],
            "size": {
                "0": 315,
                "1": 82
            },
            "flags": {
                "pinned": true
            },
            "order": 23,
            "mode": 0,
            "inputs": [
                {
                    "name": "image",
                    "type": "IMAGE",
                    "link": 182
                }
            ],
            "outputs": [
                {
                    "name": "IMAGE",
                    "type": "IMAGE",
                    "links": [
                        183,
                        192
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
            "id": 131,
            "type": "GetImageSize",
            "pos": [
                767.9118517444521,
                550.59952761082
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
                    "link": 192
                }
            ],
            "outputs": [
                {
                    "name": "width",
                    "type": "INT",
                    "links": [
                        193
                    ],
                    "shape": 3,
                    "slot_index": 0
                },
                {
                    "name": "height",
                    "type": "INT",
                    "links": [
                        194
                    ],
                    "shape": 3,
                    "slot_index": 1
                }
            ],
            "properties": {
                "Node name for S&R": "GetImageSize"
            }
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
            "order": 21,
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
                        151,
                        202
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
            "id": 137,
            "type": "Reroute",
            "pos": [
                129,
                715
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 39,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 202
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "VAE",
                    "links": [],
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            }
        },
        {
            "id": 136,
            "type": "Reroute",
            "pos": [
                131,
                676
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
                    "link": 200
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "MODEL",
                    "links": [],
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            }
        },
        {
            "id": 127,
            "type": "CLIPTextEncode",
            "pos": [
                375,
                -64
            ],
            "size": {
                "0": 394.78350830078125,
                "1": 163.26902770996094
            },
            "flags": {
                "pinned": true
            },
            "order": 34,
            "mode": 0,
            "inputs": [
                {
                    "name": "clip",
                    "type": "CLIP",
                    "link": 185
                }
            ],
            "outputs": [
                {
                    "name": "CONDITIONING",
                    "type": "CONDITIONING",
                    "links": [
                        186
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
            "color": "#232",
            "bgcolor": "#353"
        },
        {
            "id": 128,
            "type": "CLIPTextEncode",
            "pos": [
                380,
                141
            ],
            "size": {
                "0": 377,
                "1": 107
            },
            "flags": {
                "pinned": true
            },
            "order": 33,
            "mode": 0,
            "inputs": [
                {
                    "name": "clip",
                    "type": "CLIP",
                    "link": 184
                }
            ],
            "outputs": [
                {
                    "name": "CONDITIONING",
                    "type": "CONDITIONING",
                    "links": [
                        187
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
            "id": 123,
            "type": "ControlNetApplyAdvanced",
            "pos": [
                1006,
                255
            ],
            "size": {
                "0": 315,
                "1": 166
            },
            "flags": {
                "pinned": true
            },
            "order": 50,
            "mode": 0,
            "inputs": [
                {
                    "name": "positive",
                    "type": "CONDITIONING",
                    "link": 186,
                    "slot_index": 0
                },
                {
                    "name": "negative",
                    "type": "CONDITIONING",
                    "link": 187,
                    "slot_index": 1
                },
                {
                    "name": "control_net",
                    "type": "CONTROL_NET",
                    "link": 181,
                    "slot_index": 2
                },
                {
                    "name": "image",
                    "type": "IMAGE",
                    "link": 183
                }
            ],
            "outputs": [
                {
                    "name": "positive",
                    "type": "CONDITIONING",
                    "links": [
                        188
                    ],
                    "shape": 3,
                    "slot_index": 0
                },
                {
                    "name": "negative",
                    "type": "CONDITIONING",
                    "links": [
                        189
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
            "id": 125,
            "type": "LoadImage",
            "pos": [
                315,
                309
            ],
            "size": {
                "0": 315,
                "1": 314
            },
            "flags": {
                "pinned": true
            },
            "order": 6,
            "mode": 0,
            "outputs": [
                {
                    "name": "IMAGE",
                    "type": "IMAGE",
                    "links": [
                        182
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
            "properties": {
                "Node name for S&R": "LoadImage"
            },
            "widgets_values": [
                "example.png",
                "image"
            ]
        },
        {
            "id": 130,
            "type": "Reroute",
            "pos": [
                261,
                673
            ],
            "size": [
                75,
                26
            ],
            "flags": {
                "pinned": true
            },
            "order": 7,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": null
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "*",
                    "links": [
                        191
                    ],
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            }
        },
        {
            "id": 134,
            "type": "Reroute",
            "pos": [
                261,
                715
            ],
            "size": [
                75,
                26
            ],
            "flags": {
                "pinned": true
            },
            "order": 8,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": null
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "*",
                    "links": [
                        198
                    ],
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            }
        },
        {
            "id": 132,
            "type": "EmptyLatentImage",
            "pos": [
                1021,
                549
            ],
            "size": {
                "0": 315,
                "1": 106
            },
            "flags": {
                "pinned": true
            },
            "order": 53,
            "mode": 0,
            "inputs": [
                {
                    "name": "width",
                    "type": "INT",
                    "link": 193,
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
                    "link": 194,
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
                        195
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
            "id": 124,
            "type": "ControlNetLoader",
            "pos": [
                1014,
                139
            ],
            "size": {
                "0": 315,
                "1": 58
            },
            "flags": {
                "pinned": true
            },
            "order": 9,
            "mode": 0,
            "outputs": [
                {
                    "name": "CONTROL_NET",
                    "type": "CONTROL_NET",
                    "links": [
                        181
                    ],
                    "shape": 3
                }
            ],
            "title": "Recolor",
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
            "id": 129,
            "type": "KSampler",
            "pos": [
                1384,
                152
            ],
            "size": {
                "0": 315,
                "1": 262
            },
            "flags": {
                "pinned": true
            },
            "order": 62,
            "mode": 0,
            "inputs": [
                {
                    "name": "model",
                    "type": "MODEL",
                    "link": 191
                },
                {
                    "name": "positive",
                    "type": "CONDITIONING",
                    "link": 188
                },
                {
                    "name": "negative",
                    "type": "CONDITIONING",
                    "link": 189
                },
                {
                    "name": "latent_image",
                    "type": "LATENT",
                    "link": 195,
                    "slot_index": 3
                }
            ],
            "outputs": [
                {
                    "name": "LATENT",
                    "type": "LATENT",
                    "links": [
                        196
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "KSampler"
            },
            "widgets_values": [
                247426281306467,
                "randomize",
                25,
                6.5,
                "dpmpp_2m_sde",
                "karras",
                1
            ]
        },
        {
            "id": 133,
            "type": "VAEDecode",
            "pos": [
                1746,
                65
            ],
            "size": {
                "0": 210,
                "1": 46
            },
            "flags": {
                "pinned": true
            },
            "order": 67,
            "mode": 0,
            "inputs": [
                {
                    "name": "samples",
                    "type": "LATENT",
                    "link": 196
                },
                {
                    "name": "vae",
                    "type": "VAE",
                    "link": 198
                }
            ],
            "outputs": [
                {
                    "name": "IMAGE",
                    "type": "IMAGE",
                    "links": [
                        199
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "VAEDecode"
            }
        },
        {
            "id": 135,
            "type": "PreviewImage",
            "pos": [
                1727,
                181
            ],
            "size": {
                "0": 656.94873046875,
                "1": 577.503173828125
            },
            "flags": {
                "pinned": true
            },
            "order": 72,
            "mode": 0,
            "inputs": [
                {
                    "name": "images",
                    "type": "IMAGE",
                    "link": 199
                }
            ],
            "properties": {
                "Node name for S&R": "PreviewImage"
            }
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
            "order": 32,
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
                        114,
                        211
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "CLIPTextEncode"
            },
            "widgets_values": [
                "distorted, blurred, bad quality, fur, text, words, scratches, dust, "
            ],
            "color": "#322",
            "bgcolor": "#533"
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
            "order": 10,
            "mode": 0,
            "inputs": [],
            "outputs": [
                {
                    "name": "IMAGE",
                    "type": "IMAGE",
                    "links": [
                        148,
                        219
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
                "2 (4).jpg",
                "image"
            ],
            "color": "#222",
            "bgcolor": "#000"
        },
        {
            "id": 119,
            "type": "PreviewImage",
            "pos": [
                874,
                2040
            ],
            "size": {
                "0": 489.4833984375,
                "1": 582.8953857421875
            },
            "flags": {
                "pinned": true
            },
            "order": 120,
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
            "flags": {
                "pinned": true
            },
            "order": 119,
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
                    "link": 215
                },
                {
                    "name": "negative",
                    "type": "CONDITIONING",
                    "link": 216
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
                },
                {
                    "name": "denoise",
                    "type": "FLOAT",
                    "link": 283,
                    "widget": {
                        "name": "denoise",
                        "config": [
                            "FLOAT",
                            {
                                "default": 1,
                                "min": 0,
                                "max": 1,
                                "step": 0.01
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
                3,
                7,
                "fixed",
                22,
                6,
                "dpmpp_2m_sde",
                "karras",
                0.44,
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
            "id": 102,
            "type": "Reroute",
            "pos": [
                -1942,
                1430
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 24,
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
                        204
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
            "id": 142,
            "type": "ImageScaleToTotalPixels",
            "pos": [
                -1769,
                1422
            ],
            "size": {
                "0": 315,
                "1": 82
            },
            "flags": {},
            "order": 55,
            "mode": 0,
            "inputs": [
                {
                    "name": "image",
                    "type": "IMAGE",
                    "link": 229
                }
            ],
            "outputs": [
                {
                    "name": "IMAGE",
                    "type": "IMAGE",
                    "links": [
                        231
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
            "id": 143,
            "type": "Reroute",
            "pos": [
                -1782,
                1610
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 63,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 231
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "IMAGE",
                    "links": [],
                    "label": "scaled",
                    "slot_index": 0
                }
            ],
            "properties": {
                "showOutputText": false,
                "horizontal": false
            }
        },
        {
            "id": 39,
            "type": "KSampler",
            "pos": [
                2148,
                1088
            ],
            "size": {
                "0": 315,
                "1": 262
            },
            "flags": {
                "pinned": true
            },
            "order": 110,
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
                4,
                "fixed",
                30,
                6.5,
                "dpmpp_2m_sde",
                "exponential",
                0.55
            ]
        },
        {
            "id": 148,
            "type": "Reroute",
            "pos": [
                597.2861576249671,
                2746.9511966763466
            ],
            "size": [
                75,
                26
            ],
            "flags": {
                "pinned": true
            },
            "order": 58,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 258
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "IMAGE",
                    "links": [
                        281
                    ],
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
            "id": 150,
            "type": "Reroute",
            "pos": [
                597.2861576249671,
                2786.9511966763466
            ],
            "size": [
                75,
                26
            ],
            "flags": {
                "pinned": true
            },
            "order": 59,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 259
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "MODEL",
                    "links": [
                        247
                    ]
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
            "id": 151,
            "type": "Reroute",
            "pos": [
                539.2861576249671,
                2893.9511966763466
            ],
            "size": [
                75,
                26
            ],
            "flags": {
                "pinned": false
            },
            "order": 61,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 260
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "CONDITIONING",
                    "links": [
                        249
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
            "id": 152,
            "type": "UltimateSDUpscale",
            "pos": [
                757.2861576249671,
                2796.9511966763466
            ],
            "size": {
                "0": 315,
                "1": 590
            },
            "flags": {
                "pinned": true
            },
            "order": 66,
            "mode": 0,
            "inputs": [
                {
                    "name": "image",
                    "type": "IMAGE",
                    "link": 281
                },
                {
                    "name": "model",
                    "type": "MODEL",
                    "link": 247
                },
                {
                    "name": "positive",
                    "type": "CONDITIONING",
                    "link": 248
                },
                {
                    "name": "negative",
                    "type": "CONDITIONING",
                    "link": 249
                },
                {
                    "name": "vae",
                    "type": "VAE",
                    "link": 261
                },
                {
                    "name": "upscale_model",
                    "type": "UPSCALE_MODEL",
                    "link": 262,
                    "slot_index": 5
                },
                {
                    "name": "tile_width",
                    "type": "INT",
                    "link": 286,
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
                    "link": 287,
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
                },
                {
                    "name": "denoise",
                    "type": "FLOAT",
                    "link": 282,
                    "widget": {
                        "name": "denoise",
                        "config": [
                            "FLOAT",
                            {
                                "default": 1,
                                "min": 0,
                                "max": 1,
                                "step": 0.01
                            }
                        ]
                    },
                    "slot_index": 8
                }
            ],
            "outputs": [
                {
                    "name": "IMAGE",
                    "type": "IMAGE",
                    "links": [
                        254
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "UltimateSDUpscale"
            },
            "widgets_values": [
                1,
                12,
                "fixed",
                22,
                6,
                "dpmpp_2m_sde",
                "karras",
                0.55,
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
            "id": 153,
            "type": "PreviewImage",
            "pos": [
                1091.286157624967,
                2796.9511966763466
            ],
            "size": {
                "0": 489.4833984375,
                "1": 582.8953857421875
            },
            "flags": {
                "pinned": true
            },
            "order": 71,
            "mode": 0,
            "inputs": [
                {
                    "name": "images",
                    "type": "IMAGE",
                    "link": 254
                }
            ],
            "properties": {
                "Node name for S&R": "PreviewImage"
            },
            "color": "#323",
            "bgcolor": "#535"
        },
        {
            "id": 116,
            "type": "Reroute",
            "pos": [
                322,
                2137
            ],
            "size": [
                75,
                26
            ],
            "flags": {
                "pinned": false
            },
            "order": 49,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 211
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "CONDITIONING",
                    "links": [
                        216,
                        260
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
            "order": 51,
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
                        173,
                        261
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
            "id": 146,
            "type": "ImageScaleBy",
            "pos": [
                -516,
                2638
            ],
            "size": {
                "0": 315,
                "1": 82
            },
            "flags": {},
            "order": 26,
            "mode": 0,
            "inputs": [
                {
                    "name": "image",
                    "type": "IMAGE",
                    "link": 240
                }
            ],
            "outputs": [
                {
                    "name": "IMAGE",
                    "type": "IMAGE",
                    "links": [
                        244
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "ImageScaleBy"
            },
            "widgets_values": [
                "nearest-exact",
                1
            ],
            "color": "#322",
            "bgcolor": "#533"
        },
        {
            "id": 57,
            "type": "ImageScaleToTotalPixels",
            "pos": [
                -1108,
                1552
            ],
            "size": {
                "0": 315,
                "1": 82
            },
            "flags": {},
            "order": 68,
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
            "id": 156,
            "type": "ImageScaleToTotalPixels",
            "pos": [
                53,
                3154
            ],
            "size": {
                "0": 315,
                "1": 82
            },
            "flags": {},
            "order": 27,
            "mode": 0,
            "inputs": [
                {
                    "name": "image",
                    "type": "IMAGE",
                    "link": 264
                }
            ],
            "outputs": [
                {
                    "name": "IMAGE",
                    "type": "IMAGE",
                    "links": [
                        265
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
            "id": 144,
            "type": "LoadImage",
            "pos": [
                -514,
                2768
            ],
            "size": {
                "0": 315,
                "1": 314
            },
            "flags": {},
            "order": 11,
            "mode": 0,
            "outputs": [
                {
                    "name": "IMAGE",
                    "type": "IMAGE",
                    "links": [
                        240,
                        264
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
            "properties": {
                "Node name for S&R": "LoadImage"
            },
            "widgets_values": [
                "ff1.png",
                "image"
            ],
            "color": "#322",
            "bgcolor": "#533"
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
            "order": 112,
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
                        158,
                        268
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
            "id": 157,
            "type": "GetImageSize",
            "pos": [
                495,
                3026
            ],
            "size": {
                "0": 210,
                "1": 46
            },
            "flags": {
                "pinned": false
            },
            "order": 43,
            "mode": 0,
            "inputs": [
                {
                    "name": "image",
                    "type": "IMAGE",
                    "link": 265
                }
            ],
            "outputs": [
                {
                    "name": "width",
                    "type": "INT",
                    "links": [],
                    "shape": 3,
                    "slot_index": 0
                },
                {
                    "name": "height",
                    "type": "INT",
                    "links": [],
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
            "order": 116,
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
            "order": 12,
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
                "4x-UltraSharp.pth"
            ]
        },
        {
            "id": 49,
            "type": "Reroute",
            "pos": [
                -1857,
                1536
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 41,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 204
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "IMAGE",
                    "links": [
                        125,
                        229,
                        233,
                        270
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
            "order": 56,
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
                    "link": 233
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
                0.92
            ],
            "color": "#233",
            "bgcolor": "#355"
        },
        {
            "id": 158,
            "type": "ImageScaleBy",
            "pos": [
                -1593,
                1847
            ],
            "size": {
                "0": 315,
                "1": 82
            },
            "flags": {},
            "order": 57,
            "mode": 0,
            "inputs": [
                {
                    "name": "image",
                    "type": "IMAGE",
                    "link": 270
                }
            ],
            "outputs": [
                {
                    "name": "IMAGE",
                    "type": "IMAGE",
                    "links": [
                        271
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "ImageScaleBy"
            },
            "widgets_values": [
                "nearest-exact",
                2
            ]
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
            "order": 13,
            "mode": 0,
            "outputs": [
                {
                    "name": "FACERESTORE_MODEL",
                    "type": "FACERESTORE_MODEL",
                    "links": [
                        122,
                        272
                    ],
                    "shape": 3,
                    "slot_index": 0
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
            "id": 159,
            "type": "FaceRestoreCFWithModel",
            "pos": [
                -1589,
                1986
            ],
            "size": {
                "0": 315,
                "1": 102
            },
            "flags": {},
            "order": 65,
            "mode": 0,
            "inputs": [
                {
                    "name": "facerestore_model",
                    "type": "FACERESTORE_MODEL",
                    "link": 272,
                    "slot_index": 0
                },
                {
                    "name": "image",
                    "type": "IMAGE",
                    "link": 271
                }
            ],
            "outputs": [
                {
                    "name": "IMAGE",
                    "type": "IMAGE",
                    "links": [
                        273
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
                0.92
            ],
            "color": "#233",
            "bgcolor": "#355"
        },
        {
            "id": 147,
            "type": "Reroute",
            "pos": [
                -39,
                2777
            ],
            "size": [
                75,
                26
            ],
            "flags": {},
            "order": 42,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 244
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "IMAGE",
                    "links": [
                        258,
                        269
                    ],
                    "slot_index": 0,
                    "label": "full"
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
            "order": 14,
            "mode": 0,
            "outputs": [
                {
                    "name": "MODEL",
                    "type": "MODEL",
                    "links": [
                        104,
                        163,
                        200
                    ],
                    "shape": 3,
                    "slot_index": 0
                },
                {
                    "name": "CLIP",
                    "type": "CLIP",
                    "links": [
                        57,
                        58,
                        184,
                        185,
                        275
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
            "id": 161,
            "type": "CLIPTextEncode",
            "pos": [
                -376,
                3154
            ],
            "size": {
                "0": 255.16261291503906,
                "1": 76.00003051757812
            },
            "flags": {},
            "order": 35,
            "mode": 0,
            "inputs": [
                {
                    "name": "clip",
                    "type": "CLIP",
                    "link": 275
                }
            ],
            "outputs": [
                {
                    "name": "CONDITIONING",
                    "type": "CONDITIONING",
                    "links": [],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "CLIPTextEncode"
            },
            "widgets_values": [
                ""
            ]
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
            "order": 107,
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
                    "links": [],
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
                -345,
                2434
            ],
            "size": [
                75,
                26
            ],
            "flags": {
                "pinned": false
            },
            "order": 47,
            "mode": 0,
            "inputs": [
                {
                    "name": "",
                    "type": "*",
                    "link": 280
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "CONDITIONING",
                    "links": [
                        214,
                        278
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
            "id": 141,
            "type": "PreviewImage",
            "pos": [
                2599,
                1378
            ],
            "size": {
                "0": 485.2283935546875,
                "1": 393.5586853027344
            },
            "flags": {
                "pinned": true
            },
            "order": 25,
            "mode": 0,
            "inputs": [
                {
                    "name": "images",
                    "type": "IMAGE",
                    "link": 219
                }
            ],
            "properties": {
                "Node name for S&R": "PreviewImage"
            }
        },
        {
            "id": 41,
            "type": "PreviewImage",
            "pos": [
                2140,
                1372
            ],
            "size": {
                "0": 437,
                "1": 402
            },
            "flags": {
                "pinned": true
            },
            "order": 113,
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
            "id": 37,
            "type": "CLIPTextEncode",
            "pos": [
                -198,
                1087
            ],
            "size": {
                "0": 394.78350830078125,
                "1": 163.26902770996094
            },
            "flags": {},
            "order": 31,
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
                        113,
                        280
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
            "color": "#232",
            "bgcolor": "#353"
        },
        {
            "id": 155,
            "type": "ControlNetApply",
            "pos": [
                51,
                3007
            ],
            "size": {
                "0": 317.4000244140625,
                "1": 98
            },
            "flags": {},
            "order": 60,
            "mode": 0,
            "inputs": [
                {
                    "name": "conditioning",
                    "type": "CONDITIONING",
                    "link": 278
                },
                {
                    "name": "control_net",
                    "type": "CONTROL_NET",
                    "link": 257
                },
                {
                    "name": "image",
                    "type": "IMAGE",
                    "link": 269
                }
            ],
            "outputs": [
                {
                    "name": "CONDITIONING",
                    "type": "CONDITIONING",
                    "links": [
                        248
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "ControlNetApply"
            },
            "widgets_values": [
                1
            ],
            "color": "#2a363b",
            "bgcolor": "#3f5159"
        },
        {
            "id": 118,
            "type": "UpscaleModelLoader",
            "pos": [
                -80,
                2500
            ],
            "size": {
                "0": 315,
                "1": 58
            },
            "flags": {},
            "order": 15,
            "mode": 0,
            "outputs": [
                {
                    "name": "UPSCALE_MODEL",
                    "type": "UPSCALE_MODEL",
                    "links": [
                        174,
                        262
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "UpscaleModelLoader"
            },
            "widgets_values": [
                "4xESRGAN.pth"
            ],
            "color": "#323",
            "bgcolor": "#535"
        },
        {
            "id": 160,
            "type": "PreviewImage",
            "pos": [
                -1591,
                2131
            ],
            "size": {
                "0": 318.5003662109375,
                "1": 357.1995544433594
            },
            "flags": {},
            "order": 70,
            "mode": 0,
            "inputs": [
                {
                    "name": "images",
                    "type": "IMAGE",
                    "link": 273
                }
            ],
            "title": "Faces x2",
            "properties": {
                "Node name for S&R": "PreviewImage"
            }
        },
        {
            "id": 140,
            "type": "ControlNetApply",
            "pos": [
                -70,
                2350
            ],
            "size": {
                "0": 317.4000244140625,
                "1": 98
            },
            "flags": {},
            "order": 117,
            "mode": 0,
            "inputs": [
                {
                    "name": "conditioning",
                    "type": "CONDITIONING",
                    "link": 214
                },
                {
                    "name": "control_net",
                    "type": "CONTROL_NET",
                    "link": 213
                },
                {
                    "name": "image",
                    "type": "IMAGE",
                    "link": 217
                }
            ],
            "outputs": [
                {
                    "name": "CONDITIONING",
                    "type": "CONDITIONING",
                    "links": [
                        215
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "ControlNetApply"
            },
            "widgets_values": [
                1
            ],
            "color": "#2a363b",
            "bgcolor": "#3f5159"
        },
        {
            "id": 139,
            "type": "ControlNetLoader",
            "pos": [
                -519,
                2539
            ],
            "size": {
                "0": 315,
                "1": 58
            },
            "flags": {},
            "order": 16,
            "mode": 0,
            "outputs": [
                {
                    "name": "CONTROL_NET",
                    "type": "CONTROL_NET",
                    "links": [
                        213,
                        257
                    ],
                    "shape": 3,
                    "slot_index": 0
                }
            ],
            "properties": {
                "Node name for S&R": "ControlNetLoader"
            },
            "widgets_values": [
                "control_v11f1e_sd15_tile.pth"
            ],
            "color": "#2a363b",
            "bgcolor": "#3f5159"
        },
        {
            "id": 164,
            "type": "PrimitiveNode",
            "pos": [
                445,
                3280
            ],
            "size": {
                "0": 210,
                "1": 82
            },
            "flags": {},
            "order": 17,
            "mode": 0,
            "outputs": [
                {
                    "name": "INT",
                    "type": "INT",
                    "links": [
                        286,
                        287
                    ],
                    "slot_index": 0,
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
                }
            ],
            "properties": {},
            "widgets_values": [
                512,
                "fixed"
            ]
        },
        {
            "id": 163,
            "type": "PrimitiveNode",
            "pos": [
                280,
                2252
            ],
            "size": {
                "0": 210,
                "1": 82
            },
            "flags": {},
            "order": 18,
            "mode": 0,
            "outputs": [
                {
                    "name": "FLOAT",
                    "type": "FLOAT",
                    "links": [
                        283
                    ],
                    "widget": {
                        "name": "denoise",
                        "config": [
                            "FLOAT",
                            {
                                "default": 1,
                                "min": 0,
                                "max": 1,
                                "step": 0.01
                            }
                        ]
                    },
                    "slot_index": 0
                }
            ],
            "title": "Denoise",
            "properties": {},
            "widgets_values": [
                0.44,
                "fixed"
            ],
            "color": "#323",
            "bgcolor": "#535"
        },
        {
            "id": 162,
            "type": "PrimitiveNode",
            "pos": [
                499,
                3121
            ],
            "size": {
                "0": 210,
                "1": 82
            },
            "flags": {},
            "order": 19,
            "mode": 0,
            "outputs": [
                {
                    "name": "FLOAT",
                    "type": "FLOAT",
                    "links": [
                        282
                    ],
                    "widget": {
                        "name": "denoise",
                        "config": [
                            "FLOAT",
                            {
                                "default": 1,
                                "min": 0,
                                "max": 1,
                                "step": 0.01
                            }
                        ]
                    }
                }
            ],
            "title": "Denoise",
            "properties": {},
            "widgets_values": [
                0.55,
                "fixed"
            ],
            "color": "#323",
            "bgcolor": "#535"
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
            170,
            112,
            0,
            117,
            1,
            "MODEL"
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
        ],
        [
            181,
            124,
            0,
            123,
            2,
            "CONTROL_NET"
        ],
        [
            182,
            125,
            0,
            126,
            0,
            "IMAGE"
        ],
        [
            183,
            126,
            0,
            123,
            3,
            "IMAGE"
        ],
        [
            184,
            35,
            1,
            128,
            0,
            "CLIP"
        ],
        [
            185,
            35,
            1,
            127,
            0,
            "CLIP"
        ],
        [
            186,
            127,
            0,
            123,
            0,
            "CONDITIONING"
        ],
        [
            187,
            128,
            0,
            123,
            1,
            "CONDITIONING"
        ],
        [
            188,
            123,
            0,
            129,
            1,
            "CONDITIONING"
        ],
        [
            189,
            123,
            1,
            129,
            2,
            "CONDITIONING"
        ],
        [
            191,
            130,
            0,
            129,
            0,
            "MODEL"
        ],
        [
            192,
            126,
            0,
            131,
            0,
            "IMAGE"
        ],
        [
            193,
            131,
            0,
            132,
            0,
            "INT"
        ],
        [
            194,
            131,
            1,
            132,
            1,
            "INT"
        ],
        [
            195,
            132,
            0,
            129,
            3,
            "LATENT"
        ],
        [
            196,
            129,
            0,
            133,
            0,
            "LATENT"
        ],
        [
            198,
            134,
            0,
            133,
            1,
            "VAE"
        ],
        [
            199,
            133,
            0,
            135,
            0,
            "IMAGE"
        ],
        [
            200,
            35,
            0,
            136,
            0,
            "*"
        ],
        [
            202,
            103,
            0,
            137,
            0,
            "*"
        ],
        [
            204,
            102,
            0,
            49,
            0,
            "*"
        ],
        [
            211,
            38,
            0,
            116,
            0,
            "*"
        ],
        [
            213,
            139,
            0,
            140,
            1,
            "CONTROL_NET"
        ],
        [
            214,
            115,
            0,
            140,
            0,
            "CONDITIONING"
        ],
        [
            215,
            140,
            0,
            117,
            2,
            "CONDITIONING"
        ],
        [
            216,
            116,
            0,
            117,
            3,
            "CONDITIONING"
        ],
        [
            217,
            109,
            0,
            140,
            2,
            "IMAGE"
        ],
        [
            219,
            47,
            0,
            141,
            0,
            "IMAGE"
        ],
        [
            223,
            96,
            1,
            94,
            0,
            "MASK"
        ],
        [
            229,
            49,
            0,
            142,
            0,
            "IMAGE"
        ],
        [
            231,
            142,
            0,
            143,
            0,
            "*"
        ],
        [
            233,
            49,
            0,
            81,
            1,
            "IMAGE"
        ],
        [
            240,
            144,
            0,
            146,
            0,
            "IMAGE"
        ],
        [
            244,
            146,
            0,
            147,
            0,
            "*"
        ],
        [
            247,
            150,
            0,
            152,
            1,
            "MODEL"
        ],
        [
            248,
            155,
            0,
            152,
            2,
            "CONDITIONING"
        ],
        [
            249,
            151,
            0,
            152,
            3,
            "CONDITIONING"
        ],
        [
            254,
            152,
            0,
            153,
            0,
            "IMAGE"
        ],
        [
            257,
            139,
            0,
            155,
            1,
            "CONTROL_NET"
        ],
        [
            258,
            147,
            0,
            148,
            0,
            "*"
        ],
        [
            259,
            112,
            0,
            150,
            0,
            "*"
        ],
        [
            260,
            116,
            0,
            151,
            0,
            "*"
        ],
        [
            261,
            110,
            0,
            152,
            4,
            "VAE"
        ],
        [
            262,
            118,
            0,
            152,
            5,
            "UPSCALE_MODEL"
        ],
        [
            264,
            144,
            0,
            156,
            0,
            "IMAGE"
        ],
        [
            265,
            156,
            0,
            157,
            0,
            "IMAGE"
        ],
        [
            268,
            80,
            0,
            109,
            0,
            "*"
        ],
        [
            269,
            147,
            0,
            155,
            2,
            "IMAGE"
        ],
        [
            270,
            49,
            0,
            158,
            0,
            "IMAGE"
        ],
        [
            271,
            158,
            0,
            159,
            1,
            "IMAGE"
        ],
        [
            272,
            82,
            0,
            159,
            0,
            "FACERESTORE_MODEL"
        ],
        [
            273,
            159,
            0,
            160,
            0,
            "IMAGE"
        ],
        [
            275,
            35,
            1,
            161,
            0,
            "CLIP"
        ],
        [
            278,
            115,
            0,
            155,
            0,
            "CONDITIONING"
        ],
        [
            280,
            37,
            0,
            115,
            0,
            "*"
        ],
        [
            281,
            148,
            0,
            152,
            0,
            "IMAGE"
        ],
        [
            282,
            162,
            0,
            152,
            8,
            "FLOAT"
        ],
        [
            283,
            163,
            0,
            117,
            8,
            "FLOAT"
        ],
        [
            286,
            164,
            0,
            152,
            6,
            "INT"
        ],
        [
            287,
            164,
            0,
            152,
            7,
            "INT"
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
        },
        {
            "title": "Recolor",
            "bounding": [
                296,
                -140,
                2111,
                919
            ],
            "color": "#a1309b"
        }
    ],
    "config": {},
    "extra": {},
    "version": 0.4
};
