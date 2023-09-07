export const defaultGraph = {
    "last_node_id": 253,
        "last_link_id": 558,
            "nodes": [
                {
                    "id": 46,
                    "type": "UpscaleModelLoader",
                    "pos": [
                        1871.589840615132,
                        561.7341474668334
                    ],
                    "size": {
                        "0": 257.6263122558594,
                        "1": 58
                    },
                    "flags": {},
                    "order": 0,
                    "mode": 0,
                    "outputs": [
                        {
                            "name": "UPSCALE_MODEL",
                            "type": "UPSCALE_MODEL",
                            "links": [
                                60
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "UpscaleModelLoader"
                    },
                    "widgets_values": [
                        "4x_Valar_v1.pth"
                    ]
                },
                {
                    "id": 55,
                    "type": "Reroute",
                    "pos": [
                        1838.1152276260023,
                        205.66252674610968
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 127,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 92
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "CONDITIONING",
                            "links": [
                                76
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
                    "id": 56,
                    "type": "Reroute",
                    "pos": [
                        1836.1152276260023,
                        239.66252674610996
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 126,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 91
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "CONDITIONING",
                            "links": [
                                78
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
                        1842.743464104246,
                        428.1503132550112
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 125,
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
                                65
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
                    "id": 49,
                    "type": "Reroute",
                    "pos": [
                        1844.743464104246,
                        458.1503132550116
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 123,
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
                                67
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
                    "id": 54,
                    "type": "Reroute",
                    "pos": [
                        1836.9994487794825,
                        173.80281649816675
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 46,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 93
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "MODEL",
                            "links": [
                                74
                            ],
                            "slot_index": 0,
                            "label": "model"
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
                    "id": 47,
                    "type": "Reroute",
                    "pos": [
                        1840.9994487794825,
                        393.80281649816635
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 45,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 99
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "MODEL",
                            "links": [],
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
                    "id": 57,
                    "type": "Reroute",
                    "pos": [
                        1837.6574543038132,
                        308.30196221026716
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
                            "link": 98
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "VAE",
                            "links": [
                                80,
                                86
                            ],
                            "slot_index": 0,
                            "label": "VAE"
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
                    "id": 62,
                    "type": "Reroute",
                    "pos": [
                        1606.9701602216635,
                        175.51786954190507
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 121,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 90
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "CONDITIONING",
                            "links": [
                                91
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
                    "id": 61,
                    "type": "Reroute",
                    "pos": [
                        1605.9701602216635,
                        142.51786954190507
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 122,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 89
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "CONDITIONING",
                            "links": [
                                92
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
                    "id": 60,
                    "type": "Reroute",
                    "pos": [
                        1604.9701602216635,
                        107.51786954190509
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
                            "link": 88
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "MODEL",
                            "links": [
                                93
                            ],
                            "slot_index": 0,
                            "label": "model"
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
                    "id": 65,
                    "type": "Reroute",
                    "pos": [
                        1595.9701602216635,
                        514.5178695419052
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 118,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 285
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "CONDITIONING",
                            "links": [
                                101
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
                    "id": 64,
                    "type": "Reroute",
                    "pos": [
                        1595.9701602216635,
                        484.5178695419051
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 120,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 284
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "CONDITIONING",
                            "links": [
                                100
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
                    "id": 63,
                    "type": "Reroute",
                    "pos": [
                        1595.9701602216635,
                        454.5178695419051
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
                            "link": 94
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "MODEL",
                            "links": [
                                99
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
                    "id": 66,
                    "type": "Reroute",
                    "pos": [
                        1603.9701602216635,
                        355.5178695419051
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 55,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 276
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "VAE",
                            "links": [
                                98
                            ],
                            "label": "VAE",
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
                    "id": 2,
                    "type": "CheckpointLoaderSimple",
                    "pos": [
                        -392.8013604475284,
                        280.8193232795192
                    ],
                    "size": {
                        "0": 315,
                        "1": 98
                    },
                    "flags": {},
                    "order": 1,
                    "mode": 0,
                    "outputs": [
                        {
                            "name": "MODEL",
                            "type": "MODEL",
                            "links": [
                                110
                            ],
                            "shape": 3,
                            "slot_index": 0
                        },
                        {
                            "name": "CLIP",
                            "type": "CLIP",
                            "links": [
                                6
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
                    "title": "SDXL Base",
                    "properties": {
                        "Node name for S&R": "CheckpointLoaderSimple"
                    },
                    "widgets_values": [
                        "RealitiesEdgeXL_.safetensors"
                    ],
                    "color": "#223",
                    "bgcolor": "#335"
                },
                {
                    "id": 68,
                    "type": "Reroute",
                    "pos": [
                        217,
                        269
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
                            "link": 110
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "MODEL",
                            "links": [
                                111
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
                    "id": 3,
                    "type": "CheckpointLoaderSimple",
                    "pos": [
                        -395.8013604475284,
                        137.81932327951856
                    ],
                    "size": {
                        "0": 315,
                        "1": 98
                    },
                    "flags": {},
                    "order": 2,
                    "mode": 0,
                    "outputs": [
                        {
                            "name": "MODEL",
                            "type": "MODEL",
                            "links": [
                                112
                            ],
                            "shape": 3,
                            "slot_index": 0
                        },
                        {
                            "name": "CLIP",
                            "type": "CLIP",
                            "links": [
                                20
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
                    "title": "Refiner",
                    "properties": {
                        "Node name for S&R": "CheckpointLoaderSimple"
                    },
                    "widgets_values": [
                        "sd_xl_refiner_1.0.safetensors"
                    ],
                    "color": "#323",
                    "bgcolor": "#535"
                },
                {
                    "id": 11,
                    "type": "Reroute",
                    "pos": [
                        220,
                        302
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
                            "link": 6
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "CLIP",
                            "links": [
                                7,
                                22
                            ],
                            "slot_index": 0,
                            "label": "CLIP SDXL Base"
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
                    "id": 69,
                    "type": "Reroute",
                    "pos": [
                        208,
                        32
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
                            "link": 112
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "MODEL",
                            "links": [
                                113
                            ],
                            "slot_index": 0,
                            "label": "model"
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
                    "id": 12,
                    "type": "Reroute",
                    "pos": [
                        209,
                        68
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 25,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 20
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "CLIP",
                            "links": [
                                18,
                                19
                            ],
                            "slot_index": 0,
                            "label": "CLIP Refiner"
                        }
                    ],
                    "title": "CLIP Refiner",
                    "properties": {
                        "showOutputText": false,
                        "horizontal": false
                    },
                    "color": "#432",
                    "bgcolor": "#653"
                },
                {
                    "id": 17,
                    "type": "Reroute",
                    "pos": [
                        212,
                        -113
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
                            "link": 15
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "STRING",
                            "links": [
                                21,
                                106,
                                107
                            ],
                            "label": "Negative",
                            "slot_index": 0
                        }
                    ],
                    "title": "Positive",
                    "properties": {
                        "showOutputText": false,
                        "horizontal": false
                    },
                    "color": "#322",
                    "bgcolor": "#533"
                },
                {
                    "id": 18,
                    "type": "Reroute",
                    "pos": [
                        210,
                        -150
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 81,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 16
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "STRING",
                            "links": [
                                17,
                                104,
                                105
                            ],
                            "label": "Positive",
                            "slot_index": 0
                        }
                    ],
                    "title": "Positive",
                    "properties": {
                        "showOutputText": false,
                        "horizontal": false
                    },
                    "color": "#232",
                    "bgcolor": "#353"
                },
                {
                    "id": 78,
                    "type": "Reroute",
                    "pos": [
                        95.25297210717079,
                        726.6028092053109
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 117,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 127,
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
                                133
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
                    "id": 77,
                    "type": "Reroute",
                    "pos": [
                        180.2529721071708,
                        728.6028092053109
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 119,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 128,
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
                                134
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
                    "id": 84,
                    "type": "ControlNetLoader",
                    "pos": [
                        535.910801027782,
                        810.6113826018814
                    ],
                    "size": {
                        "0": 233.44981384277344,
                        "1": 66.6585922241211
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 3,
                    "mode": 0,
                    "outputs": [
                        {
                            "name": "CONTROL_NET",
                            "type": "CONTROL_NET",
                            "links": [
                                143
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "title": "Canny",
                    "properties": {
                        "Node name for S&R": "ControlNetLoader"
                    },
                    "widgets_values": [
                        "control-lora-canny-rank256.safetensors"
                    ]
                },
                {
                    "id": 58,
                    "type": "UpscaleModelLoader",
                    "pos": [
                        2179.6659666652267,
                        251.1817432810785
                    ],
                    "size": {
                        "0": 268.25103759765625,
                        "1": 58
                    },
                    "flags": {},
                    "order": 4,
                    "mode": 0,
                    "outputs": [
                        {
                            "name": "UPSCALE_MODEL",
                            "type": "UPSCALE_MODEL",
                            "links": [
                                81
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "UpscaleModelLoader"
                    },
                    "widgets_values": [
                        "4x-UltraSharp.pth"
                    ],
                    "color": "#323",
                    "bgcolor": "#535"
                },
                {
                    "id": 59,
                    "type": "Reroute",
                    "pos": [
                        2060.597643549153,
                        1.0000000000000004
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 143,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 519,
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
                                83
                            ],
                            "label": "image",
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
                    "id": 53,
                    "type": "PreviewImage",
                    "pos": [
                        2878.597643549153,
                        68
                    ],
                    "size": {
                        "0": 558.1650390625,
                        "1": 892.4586181640625
                    },
                    "flags": {},
                    "order": 159,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "images",
                            "type": "IMAGE",
                            "link": 72
                        }
                    ],
                    "title": "4K",
                    "properties": {
                        "Node name for S&R": "PreviewImage"
                    },
                    "color": "#323",
                    "bgcolor": "#535"
                },
                {
                    "id": 98,
                    "type": "PreviewImage",
                    "pos": [
                        2330,
                        -510
                    ],
                    "size": {
                        "0": 373.89361572265625,
                        "1": 495.52606201171875
                    },
                    "flags": {},
                    "order": 157,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "images",
                            "type": "IMAGE",
                            "link": 463
                        }
                    ],
                    "title": "Swapped Faces",
                    "properties": {
                        "Node name for S&R": "PreviewImage"
                    },
                    "color": "#332922",
                    "bgcolor": "#593930"
                },
                {
                    "id": 139,
                    "type": "Reroute",
                    "pos": [
                        2496,
                        -607
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
                            "link": 267
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [
                                268,
                                269
                            ],
                            "label": "input",
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
                    "id": 102,
                    "type": "Reroute",
                    "pos": [
                        1307,
                        -617
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 74,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 183
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [
                                267
                            ],
                            "label": "input",
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
                    "type": "Reroute",
                    "pos": [
                        -320,
                        -609
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 66,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 368
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [
                                183
                            ],
                            "slot_index": 0,
                            "label": "input"
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
                    "id": 43,
                    "type": "Reroute",
                    "pos": [
                        885,
                        -135
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
                            "link": 275
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "VAE",
                            "links": [
                                58
                            ],
                            "slot_index": 0,
                            "label": "VAE"
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
                    "id": 67,
                    "type": "Reroute",
                    "pos": [
                        218,
                        420
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
                            "link": 541
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "VAE",
                            "links": [
                                275,
                                276
                            ],
                            "slot_index": 0,
                            "label": "VAE"
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
                    "id": 33,
                    "type": "Reroute",
                    "pos": [
                        699,
                        248
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
                            "link": 111
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "MODEL",
                            "links": [
                                39,
                                94
                            ],
                            "slot_index": 0,
                            "label": "Base Model"
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
                    "id": 75,
                    "type": "Reroute",
                    "pos": [
                        753,
                        531
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 133,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 129
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "CONDITIONING",
                            "links": [
                                122
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
                    "id": 74,
                    "type": "Reroute",
                    "pos": [
                        774,
                        566
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 134,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 277
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "CONDITIONING",
                            "links": [
                                123
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
                    "id": 37,
                    "type": "Reroute",
                    "pos": [
                        1109,
                        75
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
                            "link": 113
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "MODEL",
                            "links": [
                                43,
                                88
                            ],
                            "slot_index": 0,
                            "label": "Refiner Model"
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
                    "id": 28,
                    "type": "Reroute",
                    "pos": [
                        1109,
                        108
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 116,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 32
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "CONDITIONING",
                            "links": [
                                44,
                                89
                            ],
                            "label": "Refiner Cond Positive",
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
                    "id": 27,
                    "type": "Reroute",
                    "pos": [
                        1115,
                        138
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 115,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 31
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "CONDITIONING",
                            "links": [
                                45,
                                90
                            ],
                            "label": "Refiner Cond Negative",
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
                    "id": 109,
                    "type": "Reroute",
                    "pos": [
                        1271,
                        441
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
                            "link": 203
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "CONDITIONING",
                            "links": [
                                284
                            ],
                            "slot_index": 0,
                            "label": "bypass"
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
                    "id": 110,
                    "type": "Reroute",
                    "pos": [
                        1273,
                        476
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
                            "link": 204
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "CONDITIONING",
                            "links": [
                                285
                            ],
                            "label": "bypass",
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
                    "id": 40,
                    "type": "PreviewImage",
                    "pos": [
                        1257,
                        -225
                    ],
                    "size": {
                        "0": 347.8172302246094,
                        "1": 265.0928955078125
                    },
                    "flags": {},
                    "order": 138,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "images",
                            "type": "IMAGE",
                            "link": 54
                        }
                    ],
                    "title": "SDXL Output",
                    "properties": {
                        "Node name for S&R": "PreviewImage"
                    },
                    "color": "#223",
                    "bgcolor": "#335"
                },
                {
                    "id": 34,
                    "type": "PrimitiveNode",
                    "pos": [
                        403,
                        -191
                    ],
                    "size": {
                        "0": 210,
                        "1": 82
                    },
                    "flags": {},
                    "order": 5,
                    "mode": 0,
                    "outputs": [
                        {
                            "name": "INT",
                            "type": "INT",
                            "links": [
                                40,
                                50
                            ],
                            "widget": {
                                "name": "steps",
                                "config": [
                                    "INT",
                                    {
                                        "default": 20,
                                        "min": 1,
                                        "max": 10000
                                    }
                                ]
                            },
                            "label": "steps",
                            "slot_index": 0
                        }
                    ],
                    "title": "Steps",
                    "properties": {},
                    "widgets_values": [
                        27,
                        "fixed"
                    ],
                    "color": "#222",
                    "bgcolor": "#000"
                },
                {
                    "id": 35,
                    "type": "PrimitiveNode",
                    "pos": [
                        630,
                        -193
                    ],
                    "size": {
                        "0": 210,
                        "1": 82
                    },
                    "flags": {},
                    "order": 6,
                    "mode": 0,
                    "outputs": [
                        {
                            "name": "INT",
                            "type": "INT",
                            "links": [
                                41,
                                51
                            ],
                            "widget": {
                                "name": "end_at_step",
                                "config": [
                                    "INT",
                                    {
                                        "default": 10000,
                                        "min": 0,
                                        "max": 10000
                                    }
                                ]
                            },
                            "label": "end at step",
                            "slot_index": 0
                        }
                    ],
                    "title": "End at Step",
                    "properties": {},
                    "widgets_values": [
                        23,
                        "fixed"
                    ],
                    "color": "#222",
                    "bgcolor": "#000"
                },
                {
                    "id": 144,
                    "type": "Reroute",
                    "pos": [
                        121,
                        1514
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
                            "link": 327
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "FACERESTORE_MODEL",
                            "links": [
                                283
                            ],
                            "slot_index": 0,
                            "label": "GFPGAN"
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
                    "id": 36,
                    "type": "KSamplerAdvanced",
                    "pos": [
                        1256,
                        83
                    ],
                    "size": {
                        "0": 315,
                        "1": 334
                    },
                    "flags": {},
                    "order": 136,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "model",
                            "type": "MODEL",
                            "link": 43
                        },
                        {
                            "name": "positive",
                            "type": "CONDITIONING",
                            "link": 44
                        },
                        {
                            "name": "negative",
                            "type": "CONDITIONING",
                            "link": 45
                        },
                        {
                            "name": "latent_image",
                            "type": "LATENT",
                            "link": 52
                        },
                        {
                            "name": "steps",
                            "type": "INT",
                            "link": 50,
                            "widget": {
                                "name": "steps",
                                "config": [
                                    "INT",
                                    {
                                        "default": 20,
                                        "min": 1,
                                        "max": 10000
                                    }
                                ]
                            },
                            "slot_index": 4
                        },
                        {
                            "name": "start_at_step",
                            "type": "INT",
                            "link": 51,
                            "widget": {
                                "name": "start_at_step",
                                "config": [
                                    "INT",
                                    {
                                        "default": 0,
                                        "min": 0,
                                        "max": 10000
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
                                53
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "KSamplerAdvanced"
                    },
                    "widgets_values": [
                        "disable",
                        482154998027636,
                        "fixed",
                        27,
                        6.5,
                        "dpmpp_sde_gpu",
                        "karras",
                        23,
                        1000,
                        "disable"
                    ],
                    "color": "#323",
                    "bgcolor": "#535"
                },
                {
                    "id": 162,
                    "type": "Reroute",
                    "pos": [
                        120,
                        1550
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 40,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 328
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "FACERESTORE_MODEL",
                            "links": [
                                329
                            ],
                            "label": "CF",
                            "slot_index": 0
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
                    "id": 95,
                    "type": "PreviewImage",
                    "pos": [
                        3474,
                        54
                    ],
                    "size": {
                        "0": 602.365478515625,
                        "1": 894.4024658203125
                    },
                    "flags": {},
                    "order": 87,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "images",
                            "type": "IMAGE",
                            "link": 269
                        }
                    ],
                    "title": "Input Image",
                    "properties": {
                        "Node name for S&R": "PreviewImage"
                    },
                    "color": "#222",
                    "bgcolor": "#000"
                },
                {
                    "id": 175,
                    "type": "Reroute",
                    "pos": [
                        -319,
                        -576
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 60,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 365
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [
                                357
                            ],
                            "slot_index": 0,
                            "label": "faces"
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
                    "id": 148,
                    "type": "FaceRestoreModelLoader",
                    "pos": [
                        -2364.1720451949986,
                        159.4362503887549
                    ],
                    "size": {
                        "0": 315,
                        "1": 58
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 7,
                    "mode": 0,
                    "outputs": [
                        {
                            "name": "FACERESTORE_MODEL",
                            "type": "FACERESTORE_MODEL",
                            "links": [
                                371
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "title": "CodeFormer",
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
                    "id": 135,
                    "type": "FaceRestoreModelLoader",
                    "pos": [
                        -2348.3228208540468,
                        125.64858325827032
                    ],
                    "size": {
                        "0": 315,
                        "1": 58
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 8,
                    "mode": 0,
                    "outputs": [
                        {
                            "name": "FACERESTORE_MODEL",
                            "type": "FACERESTORE_MODEL",
                            "links": [
                                369
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "title": "GFPGAN",
                    "properties": {
                        "Node name for S&R": "FaceRestoreModelLoader"
                    },
                    "widgets_values": [
                        "GFPGANv1.4.pth"
                    ],
                    "color": "#223",
                    "bgcolor": "#335"
                },
                {
                    "id": 159,
                    "type": "Reroute",
                    "pos": [
                        -1927.7588102500008,
                        472.91375666210956
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 32,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 372
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "FACERESTORE_MODEL",
                            "links": [
                                326,
                                328
                            ],
                            "label": "CF",
                            "slot_index": 0
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
                    "id": 160,
                    "type": "Reroute",
                    "pos": [
                        -1926.7588102500008,
                        436.91375666210956
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 33,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 370
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "FACERESTORE_MODEL",
                            "links": [
                                325,
                                327
                            ],
                            "label": "GFPGAN",
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
                    "id": 183,
                    "type": "Reroute",
                    "pos": [
                        -1922.758810250001,
                        243.9137566621096
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
                            "link": 378
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [],
                            "slot_index": 0,
                            "label": "input"
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
                    "id": 161,
                    "type": "Reroute",
                    "pos": [
                        -206,
                        -387
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
                            "link": 326
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "FACERESTORE_MODEL",
                            "links": [
                                330
                            ],
                            "label": "CF",
                            "slot_index": 0
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
                    "id": 156,
                    "type": "Reroute",
                    "pos": [
                        -205,
                        -423
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
                            "link": 325
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "FACERESTORE_MODEL",
                            "links": [
                                315
                            ],
                            "label": "GFPGAN",
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
                    "id": 178,
                    "type": "Reroute",
                    "pos": [
                        -1604,
                        249
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 53,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 489
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [
                                367,
                                368
                            ],
                            "slot_index": 0,
                            "label": "input"
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
                    "id": 26,
                    "type": "Reroute",
                    "pos": [
                        283,
                        579
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 111,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 30,
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
                                127
                            ],
                            "label": "Negative",
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
                    "id": 25,
                    "type": "Reroute",
                    "pos": [
                        370,
                        578
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 113,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 119,
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
                                128
                            ],
                            "label": "Positive",
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
                    "id": 189,
                    "type": "RoopImproved",
                    "pos": [
                        1985.3331519932601,
                        -339.36778501584735
                    ],
                    "size": {
                        "0": 315,
                        "1": 246
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 144,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 386
                        },
                        {
                            "name": "reference_image",
                            "type": "IMAGE",
                            "link": 387
                        }
                    ],
                    "outputs": [
                        {
                            "name": "IMAGE",
                            "type": "IMAGE",
                            "links": [
                                388
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "RoopImproved"
                    },
                    "widgets_values": [
                        "inswapper_128.onnx",
                        "2",
                        "2",
                        "left to right",
                        false,
                        "left to right",
                        false,
                        0
                    ],
                    "color": "#332922",
                    "bgcolor": "#593930"
                },
                {
                    "id": 190,
                    "type": "RoopImproved",
                    "pos": [
                        2015.3331519932597,
                        -309.36778501584723
                    ],
                    "size": {
                        "0": 315,
                        "1": 246
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 146,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 388
                        },
                        {
                            "name": "reference_image",
                            "type": "IMAGE",
                            "link": 389
                        }
                    ],
                    "outputs": [
                        {
                            "name": "IMAGE",
                            "type": "IMAGE",
                            "links": [
                                390
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "RoopImproved"
                    },
                    "widgets_values": [
                        "inswapper_128.onnx",
                        "3",
                        "3",
                        "left to right",
                        false,
                        "left to right",
                        false,
                        0
                    ],
                    "color": "#332922",
                    "bgcolor": "#593930"
                },
                {
                    "id": 188,
                    "type": "Reroute",
                    "pos": [
                        1745.3331519932606,
                        -399.3677850158476
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 139,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 407
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [
                                381,
                                396
                            ],
                            "label": "target",
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "showOutputText": false,
                        "horizontal": false
                    }
                },
                {
                    "id": 185,
                    "type": "RoopImproved",
                    "pos": [
                        1915.3331519932601,
                        -399.3677850158476
                    ],
                    "size": {
                        "0": 315,
                        "1": 246
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 140,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 381
                        },
                        {
                            "name": "reference_image",
                            "type": "IMAGE",
                            "link": 382
                        }
                    ],
                    "outputs": [
                        {
                            "name": "IMAGE",
                            "type": "IMAGE",
                            "links": [
                                383
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "RoopImproved"
                    },
                    "widgets_values": [
                        "inswapper_128.onnx",
                        "0",
                        "0",
                        "left to right",
                        false,
                        "left to right",
                        false,
                        0
                    ],
                    "color": "#332922",
                    "bgcolor": "#593930"
                },
                {
                    "id": 186,
                    "type": "RoopImproved",
                    "pos": [
                        1955.3331519932601,
                        -369.36778501584746
                    ],
                    "size": {
                        "0": 315,
                        "1": 246
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 142,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 383
                        },
                        {
                            "name": "reference_image",
                            "type": "IMAGE",
                            "link": 384
                        }
                    ],
                    "outputs": [
                        {
                            "name": "IMAGE",
                            "type": "IMAGE",
                            "links": [
                                386
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "RoopImproved"
                    },
                    "widgets_values": [
                        "inswapper_128.onnx",
                        "1",
                        "1",
                        "left to right",
                        false,
                        "left to right",
                        false,
                        0
                    ],
                    "color": "#332922",
                    "bgcolor": "#593930"
                },
                {
                    "id": 121,
                    "type": "PreviewImage",
                    "pos": [
                        2710,
                        -510
                    ],
                    "size": {
                        "0": 331.5769958496094,
                        "1": 500.1355285644531
                    },
                    "flags": {},
                    "order": 86,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "images",
                            "type": "IMAGE",
                            "link": 268
                        }
                    ],
                    "title": "Input Image",
                    "properties": {
                        "Node name for S&R": "PreviewImage"
                    },
                    "color": "#222",
                    "bgcolor": "#000"
                },
                {
                    "id": 39,
                    "type": "VAEDecode",
                    "pos": [
                        997,
                        -154
                    ],
                    "size": {
                        "0": 210,
                        "1": 46
                    },
                    "flags": {},
                    "order": 137,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "samples",
                            "type": "LATENT",
                            "link": 53
                        },
                        {
                            "name": "vae",
                            "type": "VAE",
                            "link": 58
                        }
                    ],
                    "outputs": [
                        {
                            "name": "IMAGE",
                            "type": "IMAGE",
                            "links": [
                                54,
                                407
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
                    "id": 196,
                    "type": "RoopImproved",
                    "pos": [
                        2005.2259044349037,
                        1067.9608656413898
                    ],
                    "size": {
                        "0": 315,
                        "1": 246
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 149,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 414
                        },
                        {
                            "name": "reference_image",
                            "type": "IMAGE",
                            "link": 415
                        }
                    ],
                    "outputs": [
                        {
                            "name": "IMAGE",
                            "type": "IMAGE",
                            "links": [
                                416
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "RoopImproved"
                    },
                    "widgets_values": [
                        "inswapper_128.onnx",
                        "0",
                        "0",
                        "left to right",
                        false,
                        "left to right",
                        false,
                        0
                    ],
                    "color": "#332922",
                    "bgcolor": "#593930"
                },
                {
                    "id": 197,
                    "type": "RoopImproved",
                    "pos": [
                        2045.2259044349066,
                        1097.9608656413898
                    ],
                    "size": {
                        "0": 315,
                        "1": 246
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 152,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 416
                        },
                        {
                            "name": "reference_image",
                            "type": "IMAGE",
                            "link": 417
                        }
                    ],
                    "outputs": [
                        {
                            "name": "IMAGE",
                            "type": "IMAGE",
                            "links": [
                                419
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "RoopImproved"
                    },
                    "widgets_values": [
                        "inswapper_128.onnx",
                        "1",
                        "1",
                        "left to right",
                        false,
                        "left to right",
                        false,
                        0
                    ],
                    "color": "#332922",
                    "bgcolor": "#593930"
                },
                {
                    "id": 199,
                    "type": "Reroute",
                    "pos": [
                        1835.2259044349075,
                        1067.9608656413898
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 147,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 431
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [
                                414,
                                428
                            ],
                            "label": "target"
                        }
                    ],
                    "properties": {
                        "showOutputText": false,
                        "horizontal": false
                    }
                },
                {
                    "id": 200,
                    "type": "RoopImproved",
                    "pos": [
                        2075.2259044349066,
                        1127.9608656413898
                    ],
                    "size": {
                        "0": 315,
                        "1": 246
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 155,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 419
                        },
                        {
                            "name": "reference_image",
                            "type": "IMAGE",
                            "link": 420
                        }
                    ],
                    "outputs": [
                        {
                            "name": "IMAGE",
                            "type": "IMAGE",
                            "links": [
                                421
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "RoopImproved"
                    },
                    "widgets_values": [
                        "inswapper_128.onnx",
                        "2",
                        "2",
                        "left to right",
                        false,
                        "left to right",
                        false,
                        0
                    ],
                    "color": "#332922",
                    "bgcolor": "#593930"
                },
                {
                    "id": 201,
                    "type": "RoopImproved",
                    "pos": [
                        2105.2259044349066,
                        1157.9608656413898
                    ],
                    "size": {
                        "0": 315,
                        "1": 246
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 158,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 421
                        },
                        {
                            "name": "reference_image",
                            "type": "IMAGE",
                            "link": 422
                        }
                    ],
                    "outputs": [
                        {
                            "name": "IMAGE",
                            "type": "IMAGE",
                            "links": [
                                423
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "RoopImproved"
                    },
                    "widgets_values": [
                        "inswapper_128.onnx",
                        "3",
                        "3",
                        "left to right",
                        false,
                        "left to right",
                        false,
                        0
                    ],
                    "color": "#332922",
                    "bgcolor": "#593930"
                },
                {
                    "id": 174,
                    "type": "Reroute",
                    "pos": [
                        -1606,
                        282
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
                            "link": 377
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [
                                365,
                                434
                            ],
                            "label": "faces",
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
                    "id": 207,
                    "type": "Reroute",
                    "pos": [
                        120,
                        1483
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
                            "link": 434
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [
                                435
                            ],
                            "slot_index": 0,
                            "label": "faces"
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
                    "id": 142,
                    "type": "Reroute",
                    "pos": [
                        1690,
                        1510
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 50,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 283
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "FACERESTORE_MODEL",
                            "links": [
                                280,
                                430
                            ],
                            "slot_index": 0,
                            "label": "GFPGAN"
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
                    "id": 163,
                    "type": "Reroute",
                    "pos": [
                        1730,
                        1550
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 48,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 329
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "FACERESTORE_MODEL",
                            "links": [
                                331
                            ],
                            "label": "CF",
                            "slot_index": 0
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
                    "id": 209,
                    "type": "RoopImproved",
                    "pos": [
                        3586.2058827077203,
                        -265.2285028165806
                    ],
                    "size": {
                        "0": 315,
                        "1": 246
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 162,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 442
                        },
                        {
                            "name": "reference_image",
                            "type": "IMAGE",
                            "link": 443
                        }
                    ],
                    "outputs": [
                        {
                            "name": "IMAGE",
                            "type": "IMAGE",
                            "links": [
                                444
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "RoopImproved"
                    },
                    "widgets_values": [
                        "inswapper_128.onnx",
                        "0",
                        "0",
                        "left to right",
                        false,
                        "left to right",
                        false,
                        0
                    ],
                    "color": "#332922",
                    "bgcolor": "#593930"
                },
                {
                    "id": 210,
                    "type": "RoopImproved",
                    "pos": [
                        3626.2058827077203,
                        -235.22850281658063
                    ],
                    "size": {
                        "0": 315,
                        "1": 246
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 165,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 444
                        },
                        {
                            "name": "reference_image",
                            "type": "IMAGE",
                            "link": 445
                        }
                    ],
                    "outputs": [
                        {
                            "name": "IMAGE",
                            "type": "IMAGE",
                            "links": [
                                447
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "RoopImproved"
                    },
                    "widgets_values": [
                        "inswapper_128.onnx",
                        "1",
                        "1",
                        "left to right",
                        false,
                        "left to right",
                        false,
                        0
                    ],
                    "color": "#332922",
                    "bgcolor": "#593930"
                },
                {
                    "id": 212,
                    "type": "Reroute",
                    "pos": [
                        3416.2058827077212,
                        -265.2285028165806
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 160,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 458
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [
                                442,
                                456
                            ],
                            "label": "target"
                        }
                    ],
                    "properties": {
                        "showOutputText": false,
                        "horizontal": false
                    }
                },
                {
                    "id": 213,
                    "type": "RoopImproved",
                    "pos": [
                        3656.2058827077203,
                        -205.2285028165809
                    ],
                    "size": {
                        "0": 315,
                        "1": 246
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 167,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 447
                        },
                        {
                            "name": "reference_image",
                            "type": "IMAGE",
                            "link": 448
                        }
                    ],
                    "outputs": [
                        {
                            "name": "IMAGE",
                            "type": "IMAGE",
                            "links": [
                                449
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "RoopImproved"
                    },
                    "widgets_values": [
                        "inswapper_128.onnx",
                        "2",
                        "2",
                        "left to right",
                        false,
                        "left to right",
                        false,
                        0
                    ],
                    "color": "#332922",
                    "bgcolor": "#593930"
                },
                {
                    "id": 214,
                    "type": "RoopImproved",
                    "pos": [
                        3686.2058827077203,
                        -175.22850281658108
                    ],
                    "size": {
                        "0": 315,
                        "1": 246
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 169,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 449
                        },
                        {
                            "name": "reference_image",
                            "type": "IMAGE",
                            "link": 450
                        }
                    ],
                    "outputs": [
                        {
                            "name": "IMAGE",
                            "type": "IMAGE",
                            "links": [
                                451
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "RoopImproved"
                    },
                    "widgets_values": [
                        "inswapper_128.onnx",
                        "3",
                        "3",
                        "left to right",
                        false,
                        "left to right",
                        false,
                        0
                    ],
                    "color": "#332922",
                    "bgcolor": "#593930"
                },
                {
                    "id": 219,
                    "type": "Reroute",
                    "pos": [
                        3816.2058827077203,
                        -95.22850281658017
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 163,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 456
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [],
                            "label": "bypass",
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
                    "id": 130,
                    "type": "PreviewImage",
                    "pos": [
                        4091,
                        53
                    ],
                    "size": {
                        "0": 567.4356689453125,
                        "1": 888.094482421875
                    },
                    "flags": {},
                    "order": 173,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "images",
                            "type": "IMAGE",
                            "link": 462
                        }
                    ],
                    "title": "4K Swapped Faces",
                    "properties": {
                        "Node name for S&R": "PreviewImage"
                    },
                    "color": "#332922",
                    "bgcolor": "#593930"
                },
                {
                    "id": 205,
                    "type": "Reroute",
                    "pos": [
                        2235.2259044349066,
                        1207.9608656413898
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 166,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 555
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [
                                461
                            ],
                            "label": "result",
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
                    "id": 218,
                    "type": "Reroute",
                    "pos": [
                        3816.2058827077203,
                        -135.2285028165808
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 172,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 558
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [
                                462
                            ],
                            "label": "result",
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
                    "id": 198,
                    "type": "Reroute",
                    "pos": [
                        1832.452091628792,
                        1037.3716705197564
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 9,
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
                                415,
                                417,
                                420,
                                422
                            ],
                            "label": "faces"
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
                    "id": 85,
                    "type": "ControlNetLoader",
                    "pos": [
                        1091.9108010277816,
                        810.6113826018814
                    ],
                    "size": {
                        "0": 233.44981384277344,
                        "1": 66.6585922241211
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 10,
                    "mode": 0,
                    "outputs": [
                        {
                            "name": "CONTROL_NET",
                            "type": "CONTROL_NET",
                            "links": [
                                144
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "title": "OpenPose",
                    "properties": {
                        "Node name for S&R": "ControlNetLoader"
                    },
                    "widgets_values": [
                        "thibaud_xl_openpose_256lora.safetensors"
                    ]
                },
                {
                    "id": 83,
                    "type": "ControlNetLoader",
                    "pos": [
                        256.910801027782,
                        810.6113826018814
                    ],
                    "size": {
                        "0": 233.44981384277344,
                        "1": 66.6585922241211
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 11,
                    "mode": 0,
                    "outputs": [
                        {
                            "name": "CONTROL_NET",
                            "type": "CONTROL_NET",
                            "links": [
                                142
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "title": "Depth",
                    "properties": {
                        "Node name for S&R": "ControlNetLoader"
                    },
                    "widgets_values": [
                        "control-lora-depth-rank256.safetensors"
                    ]
                },
                {
                    "id": 70,
                    "type": "MiDaS-DepthMapPreprocessor",
                    "pos": [
                        256.910801027782,
                        1050.611382601883
                    ],
                    "size": {
                        "0": 228.3647003173828,
                        "1": 82.0799789428711
                    },
                    "flags": {},
                    "order": 99,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 162,
                            "slot_index": 0
                        }
                    ],
                    "outputs": [
                        {
                            "name": "IMAGE",
                            "type": "IMAGE",
                            "links": [
                                115,
                                141
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
                    ]
                },
                {
                    "id": 88,
                    "type": "CannyEdgePreprocessor",
                    "pos": [
                        535.910801027782,
                        1050.611382601883
                    ],
                    "size": {
                        "0": 210,
                        "1": 82
                    },
                    "flags": {},
                    "order": 100,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 163
                        }
                    ],
                    "outputs": [
                        {
                            "name": "IMAGE",
                            "type": "IMAGE",
                            "links": [
                                149,
                                150
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "CannyEdgePreprocessor"
                    },
                    "widgets_values": [
                        56,
                        80
                    ]
                },
                {
                    "id": 170,
                    "type": "HEDPreprocessor",
                    "pos": [
                        818.910801027782,
                        1050.611382601883
                    ],
                    "size": {
                        "0": 214.06741333007812,
                        "1": 58
                    },
                    "flags": {},
                    "order": 102,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 341
                        }
                    ],
                    "outputs": [
                        {
                            "name": "IMAGE",
                            "type": "IMAGE",
                            "links": [
                                342,
                                343
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
                    ]
                },
                {
                    "id": 169,
                    "type": "DWPreprocessor",
                    "pos": [
                        1091.9108010277816,
                        1050.611382601883
                    ],
                    "size": {
                        "0": 215.19833374023438,
                        "1": 106
                    },
                    "flags": {},
                    "order": 101,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 338
                        }
                    ],
                    "outputs": [
                        {
                            "name": "IMAGE",
                            "type": "IMAGE",
                            "links": [
                                339,
                                340
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
                    ]
                },
                {
                    "id": 87,
                    "type": "PreviewImage",
                    "pos": [
                        1091.9108010277816,
                        1182.611382601883
                    ],
                    "size": {
                        "0": 210,
                        "1": 246
                    },
                    "flags": {},
                    "order": 109,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "images",
                            "type": "IMAGE",
                            "link": 340
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "PreviewImage"
                    }
                },
                {
                    "id": 171,
                    "type": "PreviewImage",
                    "pos": [
                        818.910801027782,
                        1182.611382601883
                    ],
                    "size": {
                        "0": 210,
                        "1": 246
                    },
                    "flags": {},
                    "order": 110,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "images",
                            "type": "IMAGE",
                            "link": 342
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "PreviewImage"
                    }
                },
                {
                    "id": 89,
                    "type": "PreviewImage",
                    "pos": [
                        535.910801027782,
                        1182.611382601883
                    ],
                    "size": {
                        "0": 210,
                        "1": 246
                    },
                    "flags": {},
                    "order": 108,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "images",
                            "type": "IMAGE",
                            "link": 149
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "PreviewImage"
                    }
                },
                {
                    "id": 72,
                    "type": "PreviewImage",
                    "pos": [
                        256.910801027782,
                        1182.611382601883
                    ],
                    "size": {
                        "0": 210,
                        "1": 246
                    },
                    "flags": {},
                    "order": 107,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "images",
                            "type": "IMAGE",
                            "link": 115
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "PreviewImage"
                    }
                },
                {
                    "id": 173,
                    "type": "ControlNetLoader",
                    "pos": [
                        823.910801027782,
                        810.6113826018814
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
                            "name": "CONTROL_NET",
                            "type": "CONTROL_NET",
                            "links": [
                                346
                            ],
                            "shape": 3
                        }
                    ],
                    "title": "SoftEdge",
                    "properties": {
                        "Node name for S&R": "ControlNetLoader"
                    },
                    "widgets_values": [
                        "controlnet-sd-xl-1.0-softedge-dexined.safetensors"
                    ]
                },
                {
                    "id": 76,
                    "type": "ControlNetApplyAdvanced",
                    "pos": [
                        256.910801027782,
                        850.6113826018814
                    ],
                    "size": {
                        "0": 226.8000030517578,
                        "1": 166
                    },
                    "flags": {},
                    "order": 124,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "positive",
                            "type": "CONDITIONING",
                            "link": 134
                        },
                        {
                            "name": "negative",
                            "type": "CONDITIONING",
                            "link": 133
                        },
                        {
                            "name": "control_net",
                            "type": "CONTROL_NET",
                            "link": 142
                        },
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 141
                        }
                    ],
                    "outputs": [
                        {
                            "name": "positive",
                            "type": "CONDITIONING",
                            "links": [
                                464
                            ],
                            "shape": 3,
                            "slot_index": 0
                        },
                        {
                            "name": "negative",
                            "type": "CONDITIONING",
                            "links": [
                                465
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
                    ]
                },
                {
                    "id": 81,
                    "type": "ControlNetApplyAdvanced",
                    "pos": [
                        535.910801027782,
                        850.6113826018814
                    ],
                    "size": {
                        "0": 226.8000030517578,
                        "1": 166
                    },
                    "flags": {},
                    "order": 128,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "positive",
                            "type": "CONDITIONING",
                            "link": 464
                        },
                        {
                            "name": "negative",
                            "type": "CONDITIONING",
                            "link": 465
                        },
                        {
                            "name": "control_net",
                            "type": "CONTROL_NET",
                            "link": 143
                        },
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 150
                        }
                    ],
                    "outputs": [
                        {
                            "name": "positive",
                            "type": "CONDITIONING",
                            "links": [
                                466
                            ],
                            "shape": 3,
                            "slot_index": 0
                        },
                        {
                            "name": "negative",
                            "type": "CONDITIONING",
                            "links": [
                                467
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
                    ]
                },
                {
                    "id": 172,
                    "type": "ControlNetApplyAdvanced",
                    "pos": [
                        818.910801027782,
                        850.6113826018814
                    ],
                    "size": {
                        "0": 226.8000030517578,
                        "1": 166
                    },
                    "flags": {},
                    "order": 129,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "positive",
                            "type": "CONDITIONING",
                            "link": 466
                        },
                        {
                            "name": "negative",
                            "type": "CONDITIONING",
                            "link": 467
                        },
                        {
                            "name": "control_net",
                            "type": "CONTROL_NET",
                            "link": 346,
                            "slot_index": 2
                        },
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 343
                        }
                    ],
                    "outputs": [
                        {
                            "name": "positive",
                            "type": "CONDITIONING",
                            "links": [
                                468
                            ],
                            "shape": 3,
                            "slot_index": 0
                        },
                        {
                            "name": "negative",
                            "type": "CONDITIONING",
                            "links": [
                                469
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
                    ]
                },
                {
                    "id": 82,
                    "type": "ControlNetApplyAdvanced",
                    "pos": [
                        1091.9108010277816,
                        850.6113826018814
                    ],
                    "size": {
                        "0": 226.8000030517578,
                        "1": 166
                    },
                    "flags": {},
                    "order": 130,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "positive",
                            "type": "CONDITIONING",
                            "link": 468
                        },
                        {
                            "name": "negative",
                            "type": "CONDITIONING",
                            "link": 469
                        },
                        {
                            "name": "control_net",
                            "type": "CONTROL_NET",
                            "link": 144
                        },
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 339
                        }
                    ],
                    "outputs": [
                        {
                            "name": "positive",
                            "type": "CONDITIONING",
                            "links": [
                                470
                            ],
                            "shape": 3,
                            "slot_index": 0
                        },
                        {
                            "name": "negative",
                            "type": "CONDITIONING",
                            "links": [
                                471
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
                    ]
                },
                {
                    "id": 80,
                    "type": "Reroute",
                    "pos": [
                        1335.9108010277816,
                        796.6113826018814
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 132,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 471
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "CONDITIONING",
                            "links": [
                                277
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
                    "id": 79,
                    "type": "Reroute",
                    "pos": [
                        1332.9108010277816,
                        756.6113826018814
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 131,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 470
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "CONDITIONING",
                            "links": [
                                129
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
                    "id": 208,
                    "type": "Reroute",
                    "pos": [
                        1670,
                        1470
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
                            "link": 435
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [],
                            "slot_index": 0,
                            "label": "faces"
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
                    "id": 206,
                    "type": "Reroute",
                    "pos": [
                        2235.2259044349066,
                        1237.9608656413898
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 150,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 428
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [
                                472
                            ],
                            "label": "bypass",
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
                    "id": 220,
                    "type": "Reroute",
                    "pos": [
                        2519,
                        958
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 153,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 472
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [
                                473
                            ],
                            "label": "upscale",
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
                    "id": 118,
                    "type": "PreviewImage",
                    "pos": [
                        2535,
                        1035
                    ],
                    "size": {
                        "0": 427.1427307128906,
                        "1": 664.6757202148438
                    },
                    "flags": {},
                    "order": 168,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "images",
                            "type": "IMAGE",
                            "link": 461
                        }
                    ],
                    "title": "First Upscale + GFPGAN",
                    "properties": {
                        "Node name for S&R": "PreviewImage"
                    },
                    "color": "#432",
                    "bgcolor": "#653"
                },
                {
                    "id": 143,
                    "type": "Reroute",
                    "pos": [
                        3258,
                        -123
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 58,
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
                            "type": "FACERESTORE_MODEL",
                            "links": [
                                459
                            ],
                            "slot_index": 0,
                            "label": "GFPGAN"
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
                    "id": 165,
                    "type": "Reroute",
                    "pos": [
                        3260,
                        -91
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 56,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 331,
                            "slot_index": 0
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "FACERESTORE_MODEL",
                            "links": null,
                            "label": "CF"
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
                    "id": 7,
                    "type": "SDXLPromptStyler",
                    "pos": [
                        -413,
                        -163
                    ],
                    "size": {
                        "0": 352.1472473144531,
                        "1": 197.70977783203125
                    },
                    "flags": {},
                    "order": 77,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "text_positive",
                            "type": "STRING",
                            "link": 510,
                            "widget": {
                                "name": "text_positive",
                                "config": [
                                    "STRING",
                                    {
                                        "default": "",
                                        "multiline": true
                                    }
                                ]
                            },
                            "slot_index": 0
                        },
                        {
                            "name": "text_negative",
                            "type": "STRING",
                            "link": 28,
                            "widget": {
                                "name": "text_negative",
                                "config": [
                                    "STRING",
                                    {
                                        "default": "",
                                        "multiline": true
                                    }
                                ]
                            }
                        }
                    ],
                    "outputs": [
                        {
                            "name": "text_positive",
                            "type": "STRING",
                            "links": [
                                16
                            ],
                            "shape": 3,
                            "slot_index": 0
                        },
                        {
                            "name": "text_negative",
                            "type": "STRING",
                            "links": [
                                15
                            ],
                            "shape": 3,
                            "slot_index": 1
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "SDXLPromptStyler"
                    },
                    "widgets_values": [
                        "4k, UHD, professional photo of a young man, ",
                        "painting, digital arts, drawing, cartoon, anime, illustration, low quality, deformed, blurry, (butterfly:1.5), tie, (butterfly bow tie:1.5), (bow tie:1.5), earrings, (tie:1.5), scratches, dirt, ",
                        "photo-iphone photographic",
                        "No"
                    ],
                    "color": "#232",
                    "bgcolor": "#353"
                },
                {
                    "id": 151,
                    "type": "PreviewImage",
                    "pos": [
                        -2335.758810250002,
                        330.91375666210956
                    ],
                    "size": {
                        "0": 395.474365234375,
                        "1": 372.5293273925781
                    },
                    "flags": {},
                    "order": 13,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "images",
                            "type": "IMAGE",
                            "link": null
                        }
                    ],
                    "title": "Face Restored",
                    "properties": {
                        "Node name for S&R": "PreviewImage"
                    },
                    "color": "#432",
                    "bgcolor": "#653"
                },
                {
                    "id": 182,
                    "type": "Reroute",
                    "pos": [
                        -1924.203899467783,
                        278.7990948830077
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
                            "link": 547
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [
                                377,
                                479,
                                489
                            ],
                            "label": "Restored",
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
                    "id": 21,
                    "type": "CLIPTextEncodeSDXL",
                    "pos": [
                        355,
                        367
                    ],
                    "size": {
                        "0": 394.9909973144531,
                        "1": 218.2558135986328
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 103,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "clip",
                            "type": "CLIP",
                            "link": 22
                        },
                        {
                            "name": "text_g",
                            "type": "STRING",
                            "link": 106,
                            "widget": {
                                "name": "text_g",
                                "config": [
                                    "STRING",
                                    {
                                        "multiline": true,
                                        "default": "CLIP_G"
                                    }
                                ]
                            }
                        },
                        {
                            "name": "text_l",
                            "type": "STRING",
                            "link": 107,
                            "widget": {
                                "name": "text_l",
                                "config": [
                                    "STRING",
                                    {
                                        "multiline": true,
                                        "default": "CLIP_L"
                                    }
                                ]
                            },
                            "slot_index": 2
                        },
                        {
                            "name": "target_width",
                            "type": "INT",
                            "link": 491,
                            "widget": {
                                "name": "target_width",
                                "config": [
                                    "INT",
                                    {
                                        "default": 1024,
                                        "min": 0,
                                        "max": 8192
                                    }
                                ]
                            },
                            "slot_index": 3
                        },
                        {
                            "name": "target_height",
                            "type": "INT",
                            "link": 492,
                            "widget": {
                                "name": "target_height",
                                "config": [
                                    "INT",
                                    {
                                        "default": 1024,
                                        "min": 0,
                                        "max": 8192
                                    }
                                ]
                            },
                            "slot_index": 4
                        }
                    ],
                    "outputs": [
                        {
                            "name": "CONDITIONING",
                            "type": "CONDITIONING",
                            "links": [
                                30,
                                204
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "CLIPTextEncodeSDXL"
                    },
                    "widgets_values": [
                        4096,
                        4096,
                        0,
                        0,
                        1024,
                        1024,
                        "CLIP_G",
                        "CLIP_L"
                    ],
                    "color": "#322",
                    "bgcolor": "#533"
                },
                {
                    "id": 4,
                    "type": "CLIPTextEncodeSDXL",
                    "pos": [
                        395,
                        327
                    ],
                    "size": {
                        "0": 394.9909973144531,
                        "1": 218.2558135986328
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 104,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "clip",
                            "type": "CLIP",
                            "link": 7
                        },
                        {
                            "name": "text_g",
                            "type": "STRING",
                            "link": 104,
                            "widget": {
                                "name": "text_g",
                                "config": [
                                    "STRING",
                                    {
                                        "multiline": true,
                                        "default": "CLIP_G"
                                    }
                                ]
                            }
                        },
                        {
                            "name": "text_l",
                            "type": "STRING",
                            "link": 105,
                            "widget": {
                                "name": "text_l",
                                "config": [
                                    "STRING",
                                    {
                                        "multiline": true,
                                        "default": "CLIP_L"
                                    }
                                ]
                            }
                        },
                        {
                            "name": "target_width",
                            "type": "INT",
                            "link": 497,
                            "widget": {
                                "name": "target_width",
                                "config": [
                                    "INT",
                                    {
                                        "default": 1024,
                                        "min": 0,
                                        "max": 8192
                                    }
                                ]
                            }
                        },
                        {
                            "name": "target_height",
                            "type": "INT",
                            "link": 498,
                            "widget": {
                                "name": "target_height",
                                "config": [
                                    "INT",
                                    {
                                        "default": 1024,
                                        "min": 0,
                                        "max": 8192
                                    }
                                ]
                            }
                        }
                    ],
                    "outputs": [
                        {
                            "name": "CONDITIONING",
                            "type": "CONDITIONING",
                            "links": [
                                119,
                                203
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "CLIPTextEncodeSDXL"
                    },
                    "widgets_values": [
                        4096,
                        4096,
                        0,
                        0,
                        1024,
                        1024,
                        "CLIP_G",
                        "CLIP_L"
                    ],
                    "color": "#232",
                    "bgcolor": "#353"
                },
                {
                    "id": 20,
                    "type": "CLIPTextEncodeSDXLRefiner",
                    "pos": [
                        428,
                        -4
                    ],
                    "size": {
                        "0": 396.490966796875,
                        "1": 126
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 105,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "clip",
                            "type": "CLIP",
                            "link": 18
                        },
                        {
                            "name": "text",
                            "type": "STRING",
                            "link": 21,
                            "widget": {
                                "name": "text",
                                "config": [
                                    "STRING",
                                    {
                                        "multiline": true
                                    }
                                ]
                            }
                        },
                        {
                            "name": "width",
                            "type": "INT",
                            "link": 499,
                            "widget": {
                                "name": "width",
                                "config": [
                                    "INT",
                                    {
                                        "default": 1024,
                                        "min": 0,
                                        "max": 8192
                                    }
                                ]
                            }
                        },
                        {
                            "name": "height",
                            "type": "INT",
                            "link": 500,
                            "widget": {
                                "name": "height",
                                "config": [
                                    "INT",
                                    {
                                        "default": 1024,
                                        "min": 0,
                                        "max": 8192
                                    }
                                ]
                            }
                        }
                    ],
                    "outputs": [
                        {
                            "name": "CONDITIONING",
                            "type": "CONDITIONING",
                            "links": [
                                31
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "CLIPTextEncodeSDXLRefiner"
                    },
                    "widgets_values": [
                        6,
                        1024,
                        1024,
                        ""
                    ],
                    "color": "#322",
                    "bgcolor": "#533"
                },
                {
                    "id": 228,
                    "type": "Reroute",
                    "pos": [
                        216,
                        477
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 96,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 537
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "INT",
                            "links": [
                                491,
                                497,
                                499,
                                501
                            ],
                            "label": "width",
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "showOutputText": false,
                        "horizontal": false
                    }
                },
                {
                    "id": 229,
                    "type": "Reroute",
                    "pos": [
                        215,
                        506
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 98,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 539,
                            "slot_index": 0
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "INT",
                            "links": [
                                492,
                                498,
                                500,
                                502
                            ],
                            "label": "height",
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "showOutputText": false,
                        "horizontal": false
                    }
                },
                {
                    "id": 13,
                    "type": "CLIPTextEncodeSDXLRefiner",
                    "pos": [
                        428,
                        -49
                    ],
                    "size": {
                        "0": 396.490966796875,
                        "1": 126
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 106,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "clip",
                            "type": "CLIP",
                            "link": 19
                        },
                        {
                            "name": "text",
                            "type": "STRING",
                            "link": 17,
                            "widget": {
                                "name": "text",
                                "config": [
                                    "STRING",
                                    {
                                        "multiline": true
                                    }
                                ]
                            }
                        },
                        {
                            "name": "width",
                            "type": "INT",
                            "link": 501,
                            "widget": {
                                "name": "width",
                                "config": [
                                    "INT",
                                    {
                                        "default": 1024,
                                        "min": 0,
                                        "max": 8192
                                    }
                                ]
                            }
                        },
                        {
                            "name": "height",
                            "type": "INT",
                            "link": 502,
                            "widget": {
                                "name": "height",
                                "config": [
                                    "INT",
                                    {
                                        "default": 1024,
                                        "min": 0,
                                        "max": 8192
                                    }
                                ]
                            }
                        }
                    ],
                    "outputs": [
                        {
                            "name": "CONDITIONING",
                            "type": "CONDITIONING",
                            "links": [
                                32
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "CLIPTextEncodeSDXLRefiner"
                    },
                    "widgets_values": [
                        6,
                        1024,
                        1024,
                        ""
                    ],
                    "color": "#232",
                    "bgcolor": "#353"
                },
                {
                    "id": 222,
                    "type": "CLIPSeg",
                    "pos": [
                        -1682.7057141328132,
                        562.8096642617185
                    ],
                    "size": {
                        "0": 315,
                        "1": 170
                    },
                    "flags": {},
                    "order": 52,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 479
                        }
                    ],
                    "outputs": [
                        {
                            "name": "Mask",
                            "type": "MASK",
                            "links": [
                                486,
                                503
                            ],
                            "shape": 3,
                            "slot_index": 0
                        },
                        {
                            "name": "Heatmap Mask",
                            "type": "IMAGE",
                            "links": [
                                480
                            ],
                            "shape": 3,
                            "slot_index": 1
                        },
                        {
                            "name": "BW Mask",
                            "type": "IMAGE",
                            "links": null,
                            "shape": 3
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "CLIPSeg"
                    },
                    "widgets_values": [
                        "face",
                        7,
                        0.4,
                        4
                    ],
                    "color": "#232",
                    "bgcolor": "#353"
                },
                {
                    "id": 226,
                    "type": "InvertMask",
                    "pos": [
                        -1683.7057141328132,
                        775.8096642617185
                    ],
                    "size": {
                        "0": 210,
                        "1": 26
                    },
                    "flags": {},
                    "order": 62,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "mask",
                            "type": "MASK",
                            "link": 486
                        }
                    ],
                    "outputs": [
                        {
                            "name": "MASK",
                            "type": "MASK",
                            "links": [
                                504
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "InvertMask"
                    },
                    "color": "#232",
                    "bgcolor": "#353"
                },
                {
                    "id": 223,
                    "type": "PreviewImage",
                    "pos": [
                        -1684.7057141328132,
                        838.8096642617185
                    ],
                    "size": {
                        "0": 351.6950988769531,
                        "1": 232.58140563964844
                    },
                    "flags": {},
                    "order": 64,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "images",
                            "type": "IMAGE",
                            "link": 480
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "PreviewImage"
                    },
                    "color": "#232",
                    "bgcolor": "#353"
                },
                {
                    "id": 234,
                    "type": "Reroute",
                    "pos": [
                        -1340.7057141328114,
                        764.8096642617185
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 71,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 504
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "MASK",
                            "links": [
                                505
                            ],
                            "label": "INVERT",
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "showOutputText": false,
                        "horizontal": false
                    }
                },
                {
                    "id": 233,
                    "type": "Reroute",
                    "pos": [
                        -1340.7057141328114,
                        731.8096642617185
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
                            "link": 503
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "MASK",
                            "links": null,
                            "label": "MASK"
                        }
                    ],
                    "properties": {
                        "showOutputText": false,
                        "horizontal": false
                    }
                },
                {
                    "id": 71,
                    "type": "LoadImage",
                    "pos": [
                        -2822,
                        80
                    ],
                    "size": {
                        "0": 416.94525146484375,
                        "1": 612.19287109375
                    },
                    "flags": {},
                    "order": 14,
                    "mode": 0,
                    "outputs": [
                        {
                            "name": "IMAGE",
                            "type": "IMAGE",
                            "links": [
                                374
                            ],
                            "shape": 3,
                            "slot_index": 0
                        },
                        {
                            "name": "MASK",
                            "type": "MASK",
                            "links": [],
                            "shape": 3,
                            "slot_index": 1
                        }
                    ],
                    "title": "Input Image",
                    "properties": {
                        "Node name for S&R": "LoadImage"
                    },
                    "widgets_values": [
                        "clipspace/clipspace-mask-3901863.399999976.png [input]",
                        "image"
                    ],
                    "color": "#222",
                    "bgcolor": "#000"
                },
                {
                    "id": 8,
                    "type": "PrimitiveNode",
                    "pos": [
                        -837,
                        -170
                    ],
                    "size": {
                        "0": 318.1448669433594,
                        "1": 179.348388671875
                    },
                    "flags": {},
                    "order": 15,
                    "mode": 0,
                    "outputs": [
                        {
                            "name": "connect to widget input",
                            "type": "*",
                            "links": [],
                            "slot_index": 0
                        }
                    ],
                    "properties": {},
                    "color": "#232",
                    "bgcolor": "#353"
                },
                {
                    "id": 152,
                    "type": "WD14Tagger|pysssss",
                    "pos": [
                        -829,
                        49
                    ],
                    "size": {
                        "0": 300.8430480957031,
                        "1": 202.05393981933594
                    },
                    "flags": {},
                    "order": 72,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 333
                        }
                    ],
                    "outputs": [
                        {
                            "name": "STRING",
                            "type": "STRING",
                            "links": [
                                510
                            ],
                            "shape": 6,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "WD14Tagger|pysssss"
                    },
                    "widgets_values": [
                        "wd-v1-4-convnextv2-tagger-v2",
                        0.35,
                        0.85,
                        ""
                    ],
                    "color": "#432",
                    "bgcolor": "#653"
                },
                {
                    "id": 194,
                    "type": "Reroute",
                    "pos": [
                        2149.3331519932613,
                        -260.36778501584763
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 154,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 552
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [
                                463
                            ],
                            "label": "result",
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
                    "id": 52,
                    "type": "UltimateSDUpscale",
                    "pos": [
                        2538.502026901968,
                        71.30199272784587
                    ],
                    "size": {
                        "0": 315,
                        "1": 590
                    },
                    "flags": {},
                    "order": 156,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 473
                        },
                        {
                            "name": "model",
                            "type": "MODEL",
                            "link": 74
                        },
                        {
                            "name": "positive",
                            "type": "CONDITIONING",
                            "link": 76
                        },
                        {
                            "name": "negative",
                            "type": "CONDITIONING",
                            "link": 78
                        },
                        {
                            "name": "vae",
                            "type": "VAE",
                            "link": 80
                        },
                        {
                            "name": "upscale_model",
                            "type": "UPSCALE_MODEL",
                            "link": 81
                        }
                    ],
                    "outputs": [
                        {
                            "name": "IMAGE",
                            "type": "IMAGE",
                            "links": [
                                72,
                                458
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "UltimateSDUpscale"
                    },
                    "widgets_values": [
                        1.5,
                        276493787686153,
                        "fixed",
                        5,
                        8,
                        "dpmpp_2m_sde_gpu",
                        "karras",
                        0.1499999999999999,
                        "Chess",
                        1024,
                        1024,
                        20,
                        56,
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
                    "id": 195,
                    "type": "Reroute",
                    "pos": [
                        2150.3331519932613,
                        -226.36778501584763
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 141,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 396
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [
                                519
                            ],
                            "label": "bypass",
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
                    "id": 141,
                    "type": "Reroute",
                    "pos": [
                        3144,
                        -571
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 75,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 403
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [],
                            "slot_index": 0,
                            "label": "faces"
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
                    "id": 176,
                    "type": "Reroute",
                    "pos": [
                        1311,
                        -583
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
                            "link": 357
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [
                                403
                            ],
                            "slot_index": 0,
                            "label": "faces"
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
                    "id": 179,
                    "type": "Reroute",
                    "pos": [
                        -2288.758810250002,
                        177.91375666210928
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 27,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 369,
                            "pos": [
                                37.5,
                                0
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "FACERESTORE_MODEL",
                            "links": [
                                370
                            ],
                            "label": "GFPGAN",
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
                    "id": 166,
                    "type": "Reroute",
                    "pos": [
                        -1215,
                        272
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 65,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 367
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [
                                333,
                                529
                            ],
                            "slot_index": 0,
                            "label": "Img2Img"
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
                    "id": 227,
                    "type": "GetImageSize",
                    "pos": [
                        -517.1584287398575,
                        603.6392470429104
                    ],
                    "size": {
                        "0": 140,
                        "1": 46
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 84,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 490
                        }
                    ],
                    "outputs": [
                        {
                            "name": "width",
                            "type": "INT",
                            "links": [
                                506,
                                536
                            ],
                            "shape": 3,
                            "slot_index": 0
                        },
                        {
                            "name": "height",
                            "type": "INT",
                            "links": [
                                507,
                                538
                            ],
                            "shape": 3,
                            "slot_index": 1
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "GetImageSize"
                    },
                    "color": "#222",
                    "bgcolor": "#000"
                },
                {
                    "id": 92,
                    "type": "ImageScaleToTotalPixels",
                    "pos": [
                        -527.1584287398574,
                        643.6392470429104
                    ],
                    "size": {
                        "0": 260.2096862792969,
                        "1": 82
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 78,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 530
                        }
                    ],
                    "outputs": [
                        {
                            "name": "IMAGE",
                            "type": "IMAGE",
                            "links": [
                                171,
                                490,
                                543
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "ImageScaleToTotalPixels"
                    },
                    "widgets_values": [
                        "nearest-exact",
                        1
                    ],
                    "color": "#222",
                    "bgcolor": "#000"
                },
                {
                    "id": 73,
                    "type": "Reroute",
                    "pos": [
                        212,
                        546
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 95,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 542
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "LATENT",
                            "links": [
                                117
                            ],
                            "slot_index": 0,
                            "label": "latent"
                        }
                    ],
                    "properties": {
                        "showOutputText": false,
                        "horizontal": false
                    }
                },
                {
                    "id": 91,
                    "type": "VAEEncode",
                    "pos": [
                        -517.1584287398575,
                        683.6392470429104
                    ],
                    "size": {
                        "0": 210,
                        "1": 46
                    },
                    "flags": {},
                    "order": 83,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "pixels",
                            "type": "IMAGE",
                            "link": 171
                        },
                        {
                            "name": "vae",
                            "type": "VAE",
                            "link": 532
                        }
                    ],
                    "outputs": [
                        {
                            "name": "LATENT",
                            "type": "LATENT",
                            "links": [
                                484,
                                534
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "title": "Img2Img Latent",
                    "properties": {
                        "Node name for S&R": "VAEEncode"
                    },
                    "color": "#222",
                    "bgcolor": "#000"
                },
                {
                    "id": 225,
                    "type": "SetLatentNoiseMask",
                    "pos": [
                        -273.1584287398582,
                        681.6392470429104
                    ],
                    "size": {
                        "0": 176.39999389648438,
                        "1": 46
                    },
                    "flags": {},
                    "order": 88,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "samples",
                            "type": "LATENT",
                            "link": 484
                        },
                        {
                            "name": "mask",
                            "type": "MASK",
                            "link": 533
                        }
                    ],
                    "outputs": [
                        {
                            "name": "LATENT",
                            "type": "LATENT",
                            "links": [
                                535
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "SetLatentNoiseMask"
                    },
                    "color": "#222",
                    "bgcolor": "#000"
                },
                {
                    "id": 90,
                    "type": "Reroute",
                    "pos": [
                        38,
                        837
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 93,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 544
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [
                                162,
                                163,
                                338,
                                341
                            ],
                            "label": "image",
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
                    "id": 9,
                    "type": "PrimitiveNode",
                    "pos": [
                        -835,
                        294
                    ],
                    "size": {
                        "0": 330.8716735839844,
                        "1": 165.87554931640625
                    },
                    "flags": {},
                    "order": 16,
                    "mode": 0,
                    "outputs": [
                        {
                            "name": "STRING",
                            "type": "STRING",
                            "links": [
                                28
                            ],
                            "slot_index": 0,
                            "widget": {
                                "name": "text_negative",
                                "config": [
                                    "STRING",
                                    {
                                        "default": "",
                                        "multiline": true
                                    }
                                ]
                            }
                        }
                    ],
                    "properties": {},
                    "widgets_values": [
                        "painting, digital arts, drawing, cartoon, anime, illustration, low quality, deformed, blurry, (butterfly:1.5), tie, (butterfly bow tie:1.5), (bow tie:1.5), earrings, (tie:1.5), scratches, dirt, "
                    ],
                    "color": "#322",
                    "bgcolor": "#533"
                },
                {
                    "id": 243,
                    "type": "Reroute",
                    "pos": [
                        -627.158428739859,
                        653.6392470429104
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
                            "link": 531
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "VAE",
                            "links": [
                                532,
                                540
                            ],
                            "label": "VAE",
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
                    "id": 248,
                    "type": "Reroute",
                    "pos": [
                        -74.26539576983524,
                        516.0188776724435
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 36,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 540
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "VAE",
                            "links": [
                                541
                            ],
                            "slot_index": 0,
                            "label": "VAE"
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
                    "id": 224,
                    "type": "Reroute",
                    "pos": [
                        -625.4671066567212,
                        616.5011222870743
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 80,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 482
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "MASK",
                            "links": [
                                533
                            ],
                            "label": "MASK",
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
                    "id": 247,
                    "type": "Reroute",
                    "pos": [
                        -63.46710665672053,
                        584.5011222870743
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 92,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 538
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "INT",
                            "links": [
                                539
                            ],
                            "label": "height"
                        }
                    ],
                    "properties": {
                        "showOutputText": false,
                        "horizontal": false
                    }
                },
                {
                    "id": 246,
                    "type": "Reroute",
                    "pos": [
                        -73.46710665672057,
                        554.5011222870743
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
                            "link": 536
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "INT",
                            "links": [
                                537
                            ],
                            "label": "width"
                        }
                    ],
                    "properties": {
                        "showOutputText": false,
                        "horizontal": false
                    }
                },
                {
                    "id": 184,
                    "type": "Reroute",
                    "pos": [
                        -76.46710665672057,
                        617.5011222870743
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 97,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 380
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
                    "color": "#222",
                    "bgcolor": "#000"
                },
                {
                    "id": 244,
                    "type": "Reroute",
                    "pos": [
                        -74.46710665672057,
                        650.5011222870743
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 89,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 534
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "LATENT",
                            "links": [
                                542
                            ],
                            "label": "unmasked",
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
                    "id": 242,
                    "type": "Reroute",
                    "pos": [
                        -627.3236595903611,
                        583.5199237360432
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
                            "link": 529
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [
                                530
                            ],
                            "label": "img2img",
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
                    "id": 245,
                    "type": "Reroute",
                    "pos": [
                        -78,
                        682
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 94,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 535
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "LATENT",
                            "links": null,
                            "label": "MASKED",
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
                    "id": 249,
                    "type": "Reroute",
                    "pos": [
                        -63,
                        714
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 85,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 543
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [
                                544
                            ],
                            "label": "img2img"
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
                    "id": 44,
                    "type": "EmptyLatentImage",
                    "pos": [
                        -288,
                        609
                    ],
                    "size": {
                        "0": 210,
                        "1": 106
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 91,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "width",
                            "type": "INT",
                            "link": 506,
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
                            },
                            "slot_index": 0
                        },
                        {
                            "name": "height",
                            "type": "INT",
                            "link": 507,
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
                            },
                            "slot_index": 1
                        }
                    ],
                    "outputs": [
                        {
                            "name": "LATENT",
                            "type": "LATENT",
                            "links": [
                                380
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "EmptyLatentImage"
                    },
                    "widgets_values": [
                        1024,
                        1024,
                        1
                    ],
                    "color": "#222",
                    "bgcolor": "#000"
                },
                {
                    "id": 231,
                    "type": "PrimitiveNode",
                    "pos": [
                        -449,
                        559
                    ],
                    "size": {
                        "0": 210,
                        "1": 82
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 17,
                    "mode": 0,
                    "outputs": [
                        {
                            "name": "connect to widget input",
                            "type": "*",
                            "links": [],
                            "label": "Height"
                        }
                    ],
                    "title": "Height",
                    "properties": {},
                    "color": "#332922",
                    "bgcolor": "#593930"
                },
                {
                    "id": 230,
                    "type": "PrimitiveNode",
                    "pos": [
                        -447,
                        527
                    ],
                    "size": {
                        "0": 210,
                        "1": 82
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 18,
                    "mode": 0,
                    "outputs": [
                        {
                            "name": "connect to widget input",
                            "type": "*",
                            "links": []
                        }
                    ],
                    "title": "Width",
                    "properties": {},
                    "color": "#332922",
                    "bgcolor": "#593930"
                },
                {
                    "id": 221,
                    "type": "Reroute",
                    "pos": [
                        -1119,
                        617
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 76,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 505
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "MASK",
                            "links": [
                                482
                            ],
                            "label": "MASK",
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
                    "id": 41,
                    "type": "VAELoader",
                    "pos": [
                        -1118,
                        691
                    ],
                    "size": {
                        "0": 271.3243408203125,
                        "1": 58
                    },
                    "flags": {},
                    "order": 19,
                    "mode": 0,
                    "outputs": [
                        {
                            "name": "VAE",
                            "type": "VAE",
                            "links": [
                                531
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "VAELoader"
                    },
                    "widgets_values": [
                        "sdxl_vae.safetensors"
                    ],
                    "color": "#322",
                    "bgcolor": "#533"
                },
                {
                    "id": 32,
                    "type": "KSamplerAdvanced",
                    "pos": [
                        896,
                        241
                    ],
                    "size": {
                        "0": 306.1200866699219,
                        "1": 326
                    },
                    "flags": {},
                    "order": 135,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "model",
                            "type": "MODEL",
                            "link": 39
                        },
                        {
                            "name": "positive",
                            "type": "CONDITIONING",
                            "link": 122
                        },
                        {
                            "name": "negative",
                            "type": "CONDITIONING",
                            "link": 123
                        },
                        {
                            "name": "latent_image",
                            "type": "LATENT",
                            "link": 117
                        },
                        {
                            "name": "steps",
                            "type": "INT",
                            "link": 40,
                            "widget": {
                                "name": "steps",
                                "config": [
                                    "INT",
                                    {
                                        "default": 20,
                                        "min": 1,
                                        "max": 10000
                                    }
                                ]
                            },
                            "slot_index": 4
                        },
                        {
                            "name": "end_at_step",
                            "type": "INT",
                            "link": 41,
                            "widget": {
                                "name": "end_at_step",
                                "config": [
                                    "INT",
                                    {
                                        "default": 10000,
                                        "min": 0,
                                        "max": 10000
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
                                52
                            ],
                            "shape": 3,
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "Node name for S&R": "KSamplerAdvanced"
                    },
                    "widgets_values": [
                        "enable",
                        226226182312772,
                        "fixed",
                        27,
                        6,
                        "dpmpp_sde_gpu",
                        "karras",
                        7,
                        23,
                        "enable"
                    ]
                },
                {
                    "id": 180,
                    "type": "Reroute",
                    "pos": [
                        -2368.3228208540468,
                        178.64858325827035
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 26,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 371,
                            "pos": [
                                37.5,
                                0
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "FACERESTORE_MODEL",
                            "links": [
                                372,
                                545
                            ],
                            "label": "CF",
                            "slot_index": 0
                        }
                    ],
                    "properties": {
                        "showOutputText": false,
                        "horizontal": true
                    },
                    "color": "#233",
                    "bgcolor": "#355"
                },
                {
                    "id": 181,
                    "type": "Reroute",
                    "pos": [
                        -2403.8778990276173,
                        245.98088943687696
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
                            "link": 374
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "IMAGE",
                            "links": [
                                378,
                                546
                            ],
                            "slot_index": 0,
                            "label": "input"
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
                    "id": 250,
                    "type": "FaceRestoreCFWithModel",
                    "pos": [
                        -2201,
                        143
                    ],
                    "size": [
                        263.39965405101657,
                        102
                    ],
                    "flags": {
                        "collapsed": false
                    },
                    "order": 35,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "facerestore_model",
                            "type": "FACERESTORE_MODEL",
                            "link": 545
                        },
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 546
                        }
                    ],
                    "outputs": [
                        {
                            "name": "IMAGE",
                            "type": "IMAGE",
                            "links": [
                                547
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
                        0.95
                    ]
                },
                {
                    "id": 193,
                    "type": "Reroute",
                    "pos": [
                        1745.3331519932606,
                        -259.3677850158477
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 57,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 550
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "FACERESTORE_MODEL",
                            "links": [
                                548
                            ],
                            "label": "fr model",
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
                    "id": 164,
                    "type": "Reroute",
                    "pos": [
                        1334,
                        -369
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 47,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 330
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "FACERESTORE_MODEL",
                            "links": [],
                            "label": "CF",
                            "slot_index": 0
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
                    "id": 157,
                    "type": "Reroute",
                    "pos": [
                        1331,
                        -405
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 49,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 315
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "FACERESTORE_MODEL",
                            "links": [
                                550
                            ],
                            "label": "GFPGAN",
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
                    "id": 191,
                    "type": "Reroute",
                    "pos": [
                        1815.3331519932608,
                        -299.36778501584723
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 148,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 390,
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
                                551
                            ],
                            "label": "swapped",
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
                    "id": 251,
                    "type": "FaceRestoreCFWithModel",
                    "pos": [
                        1898,
                        -222
                    ],
                    "size": [
                        225.81705909738093,
                        102
                    ],
                    "flags": {
                        "collapsed": true
                    },
                    "order": 151,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "facerestore_model",
                            "type": "FACERESTORE_MODEL",
                            "link": 548
                        },
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 551
                        }
                    ],
                    "outputs": [
                        {
                            "name": "IMAGE",
                            "type": "IMAGE",
                            "links": [
                                552
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
                        0.95
                    ]
                },
                {
                    "id": 204,
                    "type": "Reroute",
                    "pos": [
                        1835.2259044349075,
                        1207.9608656413898
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 59,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 430
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "FACERESTORE_MODEL",
                            "links": [
                                553
                            ],
                            "label": "fr model",
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
                    "id": 202,
                    "type": "Reroute",
                    "pos": [
                        1905.2259044349078,
                        1167.9608656413898
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 161,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 423,
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
                                554
                            ],
                            "label": "swapped",
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
                    "id": 252,
                    "type": "FaceRestoreCFWithModel",
                    "pos": [
                        1976,
                        1238
                    ],
                    "size": {
                        "0": 225.8170623779297,
                        "1": 102
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 164,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "facerestore_model",
                            "type": "FACERESTORE_MODEL",
                            "link": 553
                        },
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 554
                        }
                    ],
                    "outputs": [
                        {
                            "name": "IMAGE",
                            "type": "IMAGE",
                            "links": [
                                555
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
                        0.95
                    ]
                },
                {
                    "id": 217,
                    "type": "Reroute",
                    "pos": [
                        3416.2058827077212,
                        -125.22850281658063
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
                            "link": 459
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "FACERESTORE_MODEL",
                            "links": [
                                556
                            ],
                            "label": "fr model",
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
                    "id": 215,
                    "type": "Reroute",
                    "pos": [
                        3486.2058827077212,
                        -165.22850281658108
                    ],
                    "size": [
                        75,
                        26
                    ],
                    "flags": {},
                    "order": 170,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "",
                            "type": "*",
                            "link": 451,
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
                                557
                            ],
                            "label": "swapped",
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
                    "id": 253,
                    "type": "FaceRestoreCFWithModel",
                    "pos": [
                        3567,
                        -107
                    ],
                    "size": {
                        "0": 225.8170623779297,
                        "1": 102
                    },
                    "flags": {
                        "collapsed": true
                    },
                    "order": 171,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "facerestore_model",
                            "type": "FACERESTORE_MODEL",
                            "link": 556
                        },
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 557
                        }
                    ],
                    "outputs": [
                        {
                            "name": "IMAGE",
                            "type": "IMAGE",
                            "links": [
                                558
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
                        0.95
                    ]
                },
                {
                    "id": 211,
                    "type": "Reroute",
                    "pos": [
                        3416.2058827077212,
                        -295.2285028165805
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
                            "link": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "*",
                            "links": [
                                443,
                                445,
                                448,
                                450
                            ],
                            "label": "faces"
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
                    "id": 187,
                    "type": "Reroute",
                    "pos": [
                        1745.3331519932606,
                        -429.3677850158477
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
                            "link": null
                        }
                    ],
                    "outputs": [
                        {
                            "name": "",
                            "type": "*",
                            "links": [
                                382,
                                384,
                                387,
                                389
                            ],
                            "label": "faces"
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
                    "id": 45,
                    "type": "UltimateSDUpscale",
                    "pos": [
                        2171.4338879127104,
                        378.5688206899923
                    ],
                    "size": {
                        "0": 315,
                        "1": 590
                    },
                    "flags": {},
                    "order": 145,
                    "mode": 0,
                    "inputs": [
                        {
                            "name": "image",
                            "type": "IMAGE",
                            "link": 83
                        },
                        {
                            "name": "model",
                            "type": "MODEL",
                            "link": null
                        },
                        {
                            "name": "positive",
                            "type": "CONDITIONING",
                            "link": 65
                        },
                        {
                            "name": "negative",
                            "type": "CONDITIONING",
                            "link": 67
                        },
                        {
                            "name": "vae",
                            "type": "VAE",
                            "link": 86
                        },
                        {
                            "name": "upscale_model",
                            "type": "UPSCALE_MODEL",
                            "link": 60
                        }
                    ],
                    "outputs": [
                        {
                            "name": "IMAGE",
                            "type": "IMAGE",
                            "links": [
                                431
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
                        276493787686399,
                        "fixed",
                        25,
                        12,
                        "dpmpp_2m_sde_gpu",
                        "karras",
                        0.19999999999999996,
                        "Chess",
                        1024,
                        1024,
                        20,
                        56,
                        "None",
                        1,
                        64,
                        8,
                        16,
                        "enable"
                    ]
                }
            ],
                "links": [
                    [
                        6,
                        2,
                        1,
                        11,
                        0,
                        "*"
                    ],
                    [
                        7,
                        11,
                        0,
                        4,
                        0,
                        "CLIP"
                    ],
                    [
                        15,
                        7,
                        1,
                        17,
                        0,
                        "*"
                    ],
                    [
                        16,
                        7,
                        0,
                        18,
                        0,
                        "*"
                    ],
                    [
                        17,
                        18,
                        0,
                        13,
                        1,
                        "STRING"
                    ],
                    [
                        18,
                        12,
                        0,
                        20,
                        0,
                        "CLIP"
                    ],
                    [
                        19,
                        12,
                        0,
                        13,
                        0,
                        "CLIP"
                    ],
                    [
                        20,
                        3,
                        1,
                        12,
                        0,
                        "*"
                    ],
                    [
                        21,
                        17,
                        0,
                        20,
                        1,
                        "STRING"
                    ],
                    [
                        22,
                        11,
                        0,
                        21,
                        0,
                        "CLIP"
                    ],
                    [
                        28,
                        9,
                        0,
                        7,
                        1,
                        "STRING"
                    ],
                    [
                        30,
                        21,
                        0,
                        26,
                        0,
                        "*"
                    ],
                    [
                        31,
                        20,
                        0,
                        27,
                        0,
                        "*"
                    ],
                    [
                        32,
                        13,
                        0,
                        28,
                        0,
                        "*"
                    ],
                    [
                        39,
                        33,
                        0,
                        32,
                        0,
                        "MODEL"
                    ],
                    [
                        40,
                        34,
                        0,
                        32,
                        4,
                        "INT"
                    ],
                    [
                        41,
                        35,
                        0,
                        32,
                        5,
                        "INT"
                    ],
                    [
                        43,
                        37,
                        0,
                        36,
                        0,
                        "MODEL"
                    ],
                    [
                        44,
                        28,
                        0,
                        36,
                        1,
                        "CONDITIONING"
                    ],
                    [
                        45,
                        27,
                        0,
                        36,
                        2,
                        "CONDITIONING"
                    ],
                    [
                        50,
                        34,
                        0,
                        36,
                        4,
                        "INT"
                    ],
                    [
                        51,
                        35,
                        0,
                        36,
                        5,
                        "INT"
                    ],
                    [
                        52,
                        32,
                        0,
                        36,
                        3,
                        "LATENT"
                    ],
                    [
                        53,
                        36,
                        0,
                        39,
                        0,
                        "LATENT"
                    ],
                    [
                        54,
                        39,
                        0,
                        40,
                        0,
                        "IMAGE"
                    ],
                    [
                        58,
                        43,
                        0,
                        39,
                        1,
                        "VAE"
                    ],
                    [
                        60,
                        46,
                        0,
                        45,
                        5,
                        "UPSCALE_MODEL"
                    ],
                    [
                        65,
                        48,
                        0,
                        45,
                        2,
                        "CONDITIONING"
                    ],
                    [
                        67,
                        49,
                        0,
                        45,
                        3,
                        "CONDITIONING"
                    ],
                    [
                        72,
                        52,
                        0,
                        53,
                        0,
                        "IMAGE"
                    ],
                    [
                        74,
                        54,
                        0,
                        52,
                        1,
                        "MODEL"
                    ],
                    [
                        76,
                        55,
                        0,
                        52,
                        2,
                        "CONDITIONING"
                    ],
                    [
                        78,
                        56,
                        0,
                        52,
                        3,
                        "CONDITIONING"
                    ],
                    [
                        80,
                        57,
                        0,
                        52,
                        4,
                        "VAE"
                    ],
                    [
                        81,
                        58,
                        0,
                        52,
                        5,
                        "UPSCALE_MODEL"
                    ],
                    [
                        83,
                        59,
                        0,
                        45,
                        0,
                        "IMAGE"
                    ],
                    [
                        86,
                        57,
                        0,
                        45,
                        4,
                        "VAE"
                    ],
                    [
                        88,
                        37,
                        0,
                        60,
                        0,
                        "*"
                    ],
                    [
                        89,
                        28,
                        0,
                        61,
                        0,
                        "*"
                    ],
                    [
                        90,
                        27,
                        0,
                        62,
                        0,
                        "*"
                    ],
                    [
                        91,
                        62,
                        0,
                        56,
                        0,
                        "*"
                    ],
                    [
                        92,
                        61,
                        0,
                        55,
                        0,
                        "*"
                    ],
                    [
                        93,
                        60,
                        0,
                        54,
                        0,
                        "*"
                    ],
                    [
                        94,
                        33,
                        0,
                        63,
                        0,
                        "*"
                    ],
                    [
                        98,
                        66,
                        0,
                        57,
                        0,
                        "*"
                    ],
                    [
                        99,
                        63,
                        0,
                        47,
                        0,
                        "*"
                    ],
                    [
                        100,
                        64,
                        0,
                        48,
                        0,
                        "*"
                    ],
                    [
                        101,
                        65,
                        0,
                        49,
                        0,
                        "*"
                    ],
                    [
                        104,
                        18,
                        0,
                        4,
                        1,
                        "STRING"
                    ],
                    [
                        105,
                        18,
                        0,
                        4,
                        2,
                        "STRING"
                    ],
                    [
                        106,
                        17,
                        0,
                        21,
                        1,
                        "STRING"
                    ],
                    [
                        107,
                        17,
                        0,
                        21,
                        2,
                        "STRING"
                    ],
                    [
                        110,
                        2,
                        0,
                        68,
                        0,
                        "*"
                    ],
                    [
                        111,
                        68,
                        0,
                        33,
                        0,
                        "*"
                    ],
                    [
                        112,
                        3,
                        0,
                        69,
                        0,
                        "*"
                    ],
                    [
                        113,
                        69,
                        0,
                        37,
                        0,
                        "*"
                    ],
                    [
                        115,
                        70,
                        0,
                        72,
                        0,
                        "IMAGE"
                    ],
                    [
                        117,
                        73,
                        0,
                        32,
                        3,
                        "LATENT"
                    ],
                    [
                        119,
                        4,
                        0,
                        25,
                        0,
                        "*"
                    ],
                    [
                        122,
                        75,
                        0,
                        32,
                        1,
                        "CONDITIONING"
                    ],
                    [
                        123,
                        74,
                        0,
                        32,
                        2,
                        "CONDITIONING"
                    ],
                    [
                        127,
                        26,
                        0,
                        78,
                        0,
                        "*"
                    ],
                    [
                        128,
                        25,
                        0,
                        77,
                        0,
                        "*"
                    ],
                    [
                        129,
                        79,
                        0,
                        75,
                        0,
                        "*"
                    ],
                    [
                        133,
                        78,
                        0,
                        76,
                        1,
                        "CONDITIONING"
                    ],
                    [
                        134,
                        77,
                        0,
                        76,
                        0,
                        "CONDITIONING"
                    ],
                    [
                        141,
                        70,
                        0,
                        76,
                        3,
                        "IMAGE"
                    ],
                    [
                        142,
                        83,
                        0,
                        76,
                        2,
                        "CONTROL_NET"
                    ],
                    [
                        143,
                        84,
                        0,
                        81,
                        2,
                        "CONTROL_NET"
                    ],
                    [
                        144,
                        85,
                        0,
                        82,
                        2,
                        "CONTROL_NET"
                    ],
                    [
                        149,
                        88,
                        0,
                        89,
                        0,
                        "IMAGE"
                    ],
                    [
                        150,
                        88,
                        0,
                        81,
                        3,
                        "IMAGE"
                    ],
                    [
                        162,
                        90,
                        0,
                        70,
                        0,
                        "IMAGE"
                    ],
                    [
                        163,
                        90,
                        0,
                        88,
                        0,
                        "IMAGE"
                    ],
                    [
                        171,
                        92,
                        0,
                        91,
                        0,
                        "IMAGE"
                    ],
                    [
                        183,
                        94,
                        0,
                        102,
                        0,
                        "*"
                    ],
                    [
                        203,
                        4,
                        0,
                        109,
                        0,
                        "*"
                    ],
                    [
                        204,
                        21,
                        0,
                        110,
                        0,
                        "*"
                    ],
                    [
                        267,
                        102,
                        0,
                        139,
                        0,
                        "*"
                    ],
                    [
                        268,
                        139,
                        0,
                        121,
                        0,
                        "IMAGE"
                    ],
                    [
                        269,
                        139,
                        0,
                        95,
                        0,
                        "IMAGE"
                    ],
                    [
                        275,
                        67,
                        0,
                        43,
                        0,
                        "*"
                    ],
                    [
                        276,
                        67,
                        0,
                        66,
                        0,
                        "*"
                    ],
                    [
                        277,
                        80,
                        0,
                        74,
                        0,
                        "*"
                    ],
                    [
                        280,
                        142,
                        0,
                        143,
                        0,
                        "*"
                    ],
                    [
                        283,
                        144,
                        0,
                        142,
                        0,
                        "*"
                    ],
                    [
                        284,
                        109,
                        0,
                        64,
                        0,
                        "*"
                    ],
                    [
                        285,
                        110,
                        0,
                        65,
                        0,
                        "*"
                    ],
                    [
                        315,
                        156,
                        0,
                        157,
                        0,
                        "*"
                    ],
                    [
                        325,
                        160,
                        0,
                        156,
                        0,
                        "*"
                    ],
                    [
                        326,
                        159,
                        0,
                        161,
                        0,
                        "*"
                    ],
                    [
                        327,
                        160,
                        0,
                        144,
                        0,
                        "*"
                    ],
                    [
                        328,
                        159,
                        0,
                        162,
                        0,
                        "*"
                    ],
                    [
                        329,
                        162,
                        0,
                        163,
                        0,
                        "*"
                    ],
                    [
                        330,
                        161,
                        0,
                        164,
                        0,
                        "*"
                    ],
                    [
                        331,
                        163,
                        0,
                        165,
                        0,
                        "*"
                    ],
                    [
                        333,
                        166,
                        0,
                        152,
                        0,
                        "IMAGE"
                    ],
                    [
                        338,
                        90,
                        0,
                        169,
                        0,
                        "IMAGE"
                    ],
                    [
                        339,
                        169,
                        0,
                        82,
                        3,
                        "IMAGE"
                    ],
                    [
                        340,
                        169,
                        0,
                        87,
                        0,
                        "IMAGE"
                    ],
                    [
                        341,
                        90,
                        0,
                        170,
                        0,
                        "IMAGE"
                    ],
                    [
                        342,
                        170,
                        0,
                        171,
                        0,
                        "IMAGE"
                    ],
                    [
                        343,
                        170,
                        0,
                        172,
                        3,
                        "IMAGE"
                    ],
                    [
                        346,
                        173,
                        0,
                        172,
                        2,
                        "CONTROL_NET"
                    ],
                    [
                        357,
                        175,
                        0,
                        176,
                        0,
                        "*"
                    ],
                    [
                        365,
                        174,
                        0,
                        175,
                        0,
                        "*"
                    ],
                    [
                        367,
                        178,
                        0,
                        166,
                        0,
                        "*"
                    ],
                    [
                        368,
                        178,
                        0,
                        94,
                        0,
                        "*"
                    ],
                    [
                        369,
                        135,
                        0,
                        179,
                        0,
                        "*"
                    ],
                    [
                        370,
                        179,
                        0,
                        160,
                        0,
                        "*"
                    ],
                    [
                        371,
                        148,
                        0,
                        180,
                        0,
                        "*"
                    ],
                    [
                        372,
                        180,
                        0,
                        159,
                        0,
                        "*"
                    ],
                    [
                        374,
                        71,
                        0,
                        181,
                        0,
                        "*"
                    ],
                    [
                        377,
                        182,
                        0,
                        174,
                        0,
                        "*"
                    ],
                    [
                        378,
                        181,
                        0,
                        183,
                        0,
                        "*"
                    ],
                    [
                        380,
                        44,
                        0,
                        184,
                        0,
                        "*"
                    ],
                    [
                        381,
                        188,
                        0,
                        185,
                        0,
                        "IMAGE"
                    ],
                    [
                        382,
                        187,
                        0,
                        185,
                        1,
                        "IMAGE"
                    ],
                    [
                        383,
                        185,
                        0,
                        186,
                        0,
                        "IMAGE"
                    ],
                    [
                        384,
                        187,
                        0,
                        186,
                        1,
                        "IMAGE"
                    ],
                    [
                        386,
                        186,
                        0,
                        189,
                        0,
                        "IMAGE"
                    ],
                    [
                        387,
                        187,
                        0,
                        189,
                        1,
                        "IMAGE"
                    ],
                    [
                        388,
                        189,
                        0,
                        190,
                        0,
                        "IMAGE"
                    ],
                    [
                        389,
                        187,
                        0,
                        190,
                        1,
                        "IMAGE"
                    ],
                    [
                        390,
                        190,
                        0,
                        191,
                        0,
                        "*"
                    ],
                    [
                        396,
                        188,
                        0,
                        195,
                        0,
                        "*"
                    ],
                    [
                        403,
                        176,
                        0,
                        141,
                        0,
                        "*"
                    ],
                    [
                        407,
                        39,
                        0,
                        188,
                        0,
                        "*"
                    ],
                    [
                        414,
                        199,
                        0,
                        196,
                        0,
                        "IMAGE"
                    ],
                    [
                        415,
                        198,
                        0,
                        196,
                        1,
                        "IMAGE"
                    ],
                    [
                        416,
                        196,
                        0,
                        197,
                        0,
                        "IMAGE"
                    ],
                    [
                        417,
                        198,
                        0,
                        197,
                        1,
                        "IMAGE"
                    ],
                    [
                        419,
                        197,
                        0,
                        200,
                        0,
                        "IMAGE"
                    ],
                    [
                        420,
                        198,
                        0,
                        200,
                        1,
                        "IMAGE"
                    ],
                    [
                        421,
                        200,
                        0,
                        201,
                        0,
                        "IMAGE"
                    ],
                    [
                        422,
                        198,
                        0,
                        201,
                        1,
                        "IMAGE"
                    ],
                    [
                        423,
                        201,
                        0,
                        202,
                        0,
                        "*"
                    ],
                    [
                        428,
                        199,
                        0,
                        206,
                        0,
                        "*"
                    ],
                    [
                        430,
                        142,
                        0,
                        204,
                        0,
                        "*"
                    ],
                    [
                        431,
                        45,
                        0,
                        199,
                        0,
                        "*"
                    ],
                    [
                        434,
                        174,
                        0,
                        207,
                        0,
                        "*"
                    ],
                    [
                        435,
                        207,
                        0,
                        208,
                        0,
                        "*"
                    ],
                    [
                        442,
                        212,
                        0,
                        209,
                        0,
                        "IMAGE"
                    ],
                    [
                        443,
                        211,
                        0,
                        209,
                        1,
                        "IMAGE"
                    ],
                    [
                        444,
                        209,
                        0,
                        210,
                        0,
                        "IMAGE"
                    ],
                    [
                        445,
                        211,
                        0,
                        210,
                        1,
                        "IMAGE"
                    ],
                    [
                        447,
                        210,
                        0,
                        213,
                        0,
                        "IMAGE"
                    ],
                    [
                        448,
                        211,
                        0,
                        213,
                        1,
                        "IMAGE"
                    ],
                    [
                        449,
                        213,
                        0,
                        214,
                        0,
                        "IMAGE"
                    ],
                    [
                        450,
                        211,
                        0,
                        214,
                        1,
                        "IMAGE"
                    ],
                    [
                        451,
                        214,
                        0,
                        215,
                        0,
                        "*"
                    ],
                    [
                        456,
                        212,
                        0,
                        219,
                        0,
                        "*"
                    ],
                    [
                        458,
                        52,
                        0,
                        212,
                        0,
                        "*"
                    ],
                    [
                        459,
                        143,
                        0,
                        217,
                        0,
                        "*"
                    ],
                    [
                        461,
                        205,
                        0,
                        118,
                        0,
                        "IMAGE"
                    ],
                    [
                        462,
                        218,
                        0,
                        130,
                        0,
                        "IMAGE"
                    ],
                    [
                        463,
                        194,
                        0,
                        98,
                        0,
                        "IMAGE"
                    ],
                    [
                        464,
                        76,
                        0,
                        81,
                        0,
                        "CONDITIONING"
                    ],
                    [
                        465,
                        76,
                        1,
                        81,
                        1,
                        "CONDITIONING"
                    ],
                    [
                        466,
                        81,
                        0,
                        172,
                        0,
                        "CONDITIONING"
                    ],
                    [
                        467,
                        81,
                        1,
                        172,
                        1,
                        "CONDITIONING"
                    ],
                    [
                        468,
                        172,
                        0,
                        82,
                        0,
                        "CONDITIONING"
                    ],
                    [
                        469,
                        172,
                        1,
                        82,
                        1,
                        "CONDITIONING"
                    ],
                    [
                        470,
                        82,
                        0,
                        79,
                        0,
                        "*"
                    ],
                    [
                        471,
                        82,
                        1,
                        80,
                        0,
                        "*"
                    ],
                    [
                        472,
                        206,
                        0,
                        220,
                        0,
                        "*"
                    ],
                    [
                        473,
                        220,
                        0,
                        52,
                        0,
                        "IMAGE"
                    ],
                    [
                        479,
                        182,
                        0,
                        222,
                        0,
                        "IMAGE"
                    ],
                    [
                        480,
                        222,
                        1,
                        223,
                        0,
                        "IMAGE"
                    ],
                    [
                        482,
                        221,
                        0,
                        224,
                        0,
                        "*"
                    ],
                    [
                        484,
                        91,
                        0,
                        225,
                        0,
                        "LATENT"
                    ],
                    [
                        486,
                        222,
                        0,
                        226,
                        0,
                        "MASK"
                    ],
                    [
                        489,
                        182,
                        0,
                        178,
                        0,
                        "*"
                    ],
                    [
                        490,
                        92,
                        0,
                        227,
                        0,
                        "IMAGE"
                    ],
                    [
                        491,
                        228,
                        0,
                        21,
                        3,
                        "INT"
                    ],
                    [
                        492,
                        229,
                        0,
                        21,
                        4,
                        "INT"
                    ],
                    [
                        497,
                        228,
                        0,
                        4,
                        3,
                        "INT"
                    ],
                    [
                        498,
                        229,
                        0,
                        4,
                        4,
                        "INT"
                    ],
                    [
                        499,
                        228,
                        0,
                        20,
                        2,
                        "INT"
                    ],
                    [
                        500,
                        229,
                        0,
                        20,
                        3,
                        "INT"
                    ],
                    [
                        501,
                        228,
                        0,
                        13,
                        2,
                        "INT"
                    ],
                    [
                        502,
                        229,
                        0,
                        13,
                        3,
                        "INT"
                    ],
                    [
                        503,
                        222,
                        0,
                        233,
                        0,
                        "*"
                    ],
                    [
                        504,
                        226,
                        0,
                        234,
                        0,
                        "*"
                    ],
                    [
                        505,
                        234,
                        0,
                        221,
                        0,
                        "*"
                    ],
                    [
                        506,
                        227,
                        0,
                        44,
                        0,
                        "INT"
                    ],
                    [
                        507,
                        227,
                        1,
                        44,
                        1,
                        "INT"
                    ],
                    [
                        510,
                        152,
                        0,
                        7,
                        0,
                        "STRING"
                    ],
                    [
                        519,
                        195,
                        0,
                        59,
                        0,
                        "*"
                    ],
                    [
                        529,
                        166,
                        0,
                        242,
                        0,
                        "*"
                    ],
                    [
                        530,
                        242,
                        0,
                        92,
                        0,
                        "IMAGE"
                    ],
                    [
                        531,
                        41,
                        0,
                        243,
                        0,
                        "*"
                    ],
                    [
                        532,
                        243,
                        0,
                        91,
                        1,
                        "VAE"
                    ],
                    [
                        533,
                        224,
                        0,
                        225,
                        1,
                        "MASK"
                    ],
                    [
                        534,
                        91,
                        0,
                        244,
                        0,
                        "*"
                    ],
                    [
                        535,
                        225,
                        0,
                        245,
                        0,
                        "*"
                    ],
                    [
                        536,
                        227,
                        0,
                        246,
                        0,
                        "*"
                    ],
                    [
                        537,
                        246,
                        0,
                        228,
                        0,
                        "*"
                    ],
                    [
                        538,
                        227,
                        1,
                        247,
                        0,
                        "*"
                    ],
                    [
                        539,
                        247,
                        0,
                        229,
                        0,
                        "*"
                    ],
                    [
                        540,
                        243,
                        0,
                        248,
                        0,
                        "*"
                    ],
                    [
                        541,
                        248,
                        0,
                        67,
                        0,
                        "*"
                    ],
                    [
                        542,
                        244,
                        0,
                        73,
                        0,
                        "*"
                    ],
                    [
                        543,
                        92,
                        0,
                        249,
                        0,
                        "*"
                    ],
                    [
                        544,
                        249,
                        0,
                        90,
                        0,
                        "*"
                    ],
                    [
                        545,
                        180,
                        0,
                        250,
                        0,
                        "FACERESTORE_MODEL"
                    ],
                    [
                        546,
                        181,
                        0,
                        250,
                        1,
                        "IMAGE"
                    ],
                    [
                        547,
                        250,
                        0,
                        182,
                        0,
                        "*"
                    ],
                    [
                        548,
                        193,
                        0,
                        251,
                        0,
                        "FACERESTORE_MODEL"
                    ],
                    [
                        550,
                        157,
                        0,
                        193,
                        0,
                        "*"
                    ],
                    [
                        551,
                        191,
                        0,
                        251,
                        1,
                        "IMAGE"
                    ],
                    [
                        552,
                        251,
                        0,
                        194,
                        0,
                        "*"
                    ],
                    [
                        553,
                        204,
                        0,
                        252,
                        0,
                        "FACERESTORE_MODEL"
                    ],
                    [
                        554,
                        202,
                        0,
                        252,
                        1,
                        "IMAGE"
                    ],
                    [
                        555,
                        252,
                        0,
                        205,
                        0,
                        "*"
                    ],
                    [
                        556,
                        217,
                        0,
                        253,
                        0,
                        "FACERESTORE_MODEL"
                    ],
                    [
                        557,
                        215,
                        0,
                        253,
                        1,
                        "IMAGE"
                    ],
                    [
                        558,
                        253,
                        0,
                        218,
                        0,
                        "*"
                    ]
                ],
                    "groups": [
                        {
                            "title": "SDXL",
                            "bounding": [
                                -411,
                                47,
                                344,
                                348
                            ],
                            "color": "#3f789e"
                        },
                        {
                            "title": "SDXL Sampling",
                            "bounding": [
                                245,
                                -275,
                                1394,
                                870
                            ],
                            "color": "#3f789e"
                        },
                        {
                            "title": "Upscale SDXL",
                            "bounding": [
                                1864,
                                9,
                                1590,
                                964
                            ],
                            "color": "#b58b2a"
                        },
                        {
                            "title": "ControlNet",
                            "bounding": [
                                76,
                                743,
                                1291,
                                690
                            ],
                            "color": "#8AA"
                        },
                        {
                            "title": "Roop 2",
                            "bounding": [
                                1859,
                                992,
                                421,
                                282
                            ],
                            "color": "#b06634"
                        },
                        {
                            "title": "Roop 3",
                            "bounding": [
                                3451,
                                -345,
                                406,
                                284
                            ],
                            "color": "#b06634"
                        },
                        {
                            "title": "FaceRestore Models",
                            "bounding": [
                                -2374,
                                52,
                                481,
                                665
                            ],
                            "color": "#3f789e"
                        },
                        {
                            "title": "Roop 1",
                            "bounding": [
                                1780,
                                -474,
                                413,
                                287
                            ],
                            "color": "#b06634"
                        },
                        {
                            "title": "Masking",
                            "bounding": [
                                -1706,
                                492,
                                402,
                                585
                            ],
                            "color": "#8A8"
                        },
                        {
                            "title": "Latent / Mask",
                            "bounding": [
                                -594,
                                513,
                                571,
                                226
                            ],
                            "color": "#3f789e"
                        }
                    ],
                        "config": { },
    "extra": { },
    "version": 0.4
}