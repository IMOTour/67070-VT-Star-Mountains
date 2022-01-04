var APP_DATA = {
  "scenes": [
    {
      "id": "0-mid-bridge",
      "name": "Mid-bridge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.073945413791634,
        "pitch": -0.16432054804968033,
        "fov": 1.513478732036564
      },
      "linkHotspots": [
        {
          "yaw": -2.176467313297243,
          "pitch": -0.005353097262105422,
          "rotation": 0,
          "target": "1-communal-washing-tank"
        },
        {
          "yaw": 0.6708904051455651,
          "pitch": 0.105841723601241,
          "rotation": 0,
          "target": "2-steps-to-house"
        },
        {
          "yaw": 0.08865655147575069,
          "pitch": 0.3973724008834516,
          "rotation": 3.9269908169872414,
          "target": "3-by-the-river"
        },
        {
          "yaw": 0.22666817864448596,
          "pitch": -0.3641981946679991,
          "rotation": 1.5707963267948966,
          "target": "12-lower-level"
        },
        {
          "yaw": 0.22895082362215113,
          "pitch": -0.5367808729835666,
          "rotation": 1.5707963267948966,
          "target": "13-upper-level"
        },
        {
          "yaw": 1.0729004632959445,
          "pitch": -0.2271436440451673,
          "rotation": 0,
          "target": "8-steps-to-lower-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-communal-washing-tank",
      "name": "Communal washing tank",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.6758281166379136,
        "pitch": 0.005924850907394585,
        "fov": 1.513478732036564
      },
      "linkHotspots": [
        {
          "yaw": 2.279752441997359,
          "pitch": 0.3259972641646236,
          "rotation": 3.141592653589793,
          "target": "0-mid-bridge"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.02157984159067894,
          "pitch": 0.025169207332922383,
          "title": "Access",
          "text": "Access via the other side of the valley"
        },
        {
          "yaw": -2.603180542854167,
          "pitch": -0.0954083255565017,
          "title": "Historical POI",
          "text": "Old communal washing tank. Restored by local authority."
        }
      ]
    },
    {
      "id": "2-steps-to-house",
      "name": "Steps to house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11460595237982218,
          "pitch": 0.22144466850961564,
          "rotation": 3.141592653589793,
          "target": "0-mid-bridge"
        },
        {
          "yaw": -0.23650194659839308,
          "pitch": -0.1424090946079417,
          "rotation": 4.71238898038469,
          "target": "1-communal-washing-tank"
        },
        {
          "yaw": 1.1471419412545174,
          "pitch": 0.40700218791402776,
          "rotation": 3.141592653589793,
          "target": "3-by-the-river"
        },
        {
          "yaw": 1.703825543604406,
          "pitch": 0.0021516005600652477,
          "rotation": 0,
          "target": "4-landing"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.3978552914925135,
          "pitch": 0.18863278092740288,
          "title": "Access",
          "text": "Access to road where car stops - about 50m walk"
        }
      ]
    },
    {
      "id": "3-by-the-river",
      "name": "By the river",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.33841322180415645,
        "pitch": 0.23214124980510675,
        "fov": 1.513478732036564
      },
      "linkHotspots": [
        {
          "yaw": -3.067085701248903,
          "pitch": -0.1098324665472834,
          "rotation": 0,
          "target": "2-steps-to-house"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.1398230158842537,
          "pitch": 0.4895605343189793,
          "title": "Natural swimming pool",
          "text": "Stones are usually placed at this point in the river to create a natural swimming-pool. Local authority will restore it as it was washed away by heavy rains."
        }
      ]
    },
    {
      "id": "4-landing",
      "name": "Landing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.0036716465872484,
        "pitch": 0.1552050021878415,
        "fov": 1.513478732036564
      },
      "linkHotspots": [
        {
          "yaw": -1.4845723689370267,
          "pitch": 0.05200639936411733,
          "rotation": 0,
          "target": "7-front-left-side"
        },
        {
          "yaw": -0.011691890840003438,
          "pitch": 0.01354423680333916,
          "rotation": 0,
          "target": "5-storage-under-house"
        },
        {
          "yaw": 2.226885273130298,
          "pitch": 0.35284316704844443,
          "rotation": 3.141592653589793,
          "target": "0-mid-bridge"
        },
        {
          "yaw": 2.514355695125305,
          "pitch": 0.08870634986591774,
          "rotation": 4.71238898038469,
          "target": "1-communal-washing-tank"
        },
        {
          "yaw": 2.459358668462759,
          "pitch": 0.7084589991826817,
          "rotation": 2.356194490192345,
          "target": "3-by-the-river"
        },
        {
          "yaw": 1.7543875887896583,
          "pitch": 0.6462851316205231,
          "rotation": 3.9269908169872414,
          "target": "2-steps-to-house"
        },
        {
          "yaw": 1.2100278214266815,
          "pitch": 0.13343633823094336,
          "rotation": 0,
          "target": "8-steps-to-lower-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-storage-under-house",
      "name": "Storage under house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.21200516248642032,
        "pitch": 0.13484779880010578,
        "fov": 1.513478732036564
      },
      "linkHotspots": [
        {
          "yaw": 0.4407260866342746,
          "pitch": 0.49833218279945335,
          "rotation": 3.141592653589793,
          "target": "4-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-storagelow-entrance",
      "name": "Storage/Low entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "7-front-left-side",
      "name": "Front left side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.5418374548977667,
        "pitch": 0.1216897278392235,
        "fov": 1.513478732036564
      },
      "linkHotspots": [
        {
          "yaw": 1.9864314668133112,
          "pitch": 0.23542998464699672,
          "rotation": 4.71238898038469,
          "target": "4-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-steps-to-lower-entrance",
      "name": "Steps to Lower entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.6875253741611047,
        "pitch": -0.028828166324498028,
        "fov": 1.513478732036564
      },
      "linkHotspots": [
        {
          "yaw": -0.39171952709707547,
          "pitch": 0.4483936456681583,
          "rotation": 0,
          "target": "9-lower-side-storage"
        },
        {
          "yaw": -1.3328729425870982,
          "pitch": -0.4272899662173497,
          "rotation": 0,
          "target": "11-higher-side-storage"
        },
        {
          "yaw": -2.779650396479818,
          "pitch": -0.4771188070297008,
          "rotation": 4.71238898038469,
          "target": "12-lower-level"
        },
        {
          "yaw": 0.7771999457049787,
          "pitch": 0.3970170768514194,
          "rotation": 3.141592653589793,
          "target": "0-mid-bridge"
        },
        {
          "yaw": 1.0000316443935091,
          "pitch": 0.8051669172256872,
          "rotation": 1.5707963267948966,
          "target": "4-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-lower-side-storage",
      "name": "Lower side storage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.9460663235109585,
        "pitch": 0.32287546283447455,
        "fov": 1.513478732036564
      },
      "linkHotspots": [
        {
          "yaw": 0.5850851768635508,
          "pitch": 0.20522822230833526,
          "rotation": 0.7853981633974483,
          "target": "8-steps-to-lower-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-storagelower-entrance-door",
      "name": "Storage/Lower entrance Door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.801198380750969,
        "pitch": 0.20528280405987864,
        "fov": 1.513478732036564
      },
      "linkHotspots": [
        {
          "yaw": 1.9366309379792686,
          "pitch": 0.6701650971507878,
          "rotation": 14.922565104551524,
          "target": "8-steps-to-lower-entrance"
        },
        {
          "yaw": 1.3782468712444658,
          "pitch": 0.005407564822327515,
          "rotation": 4.71238898038469,
          "target": "11-higher-side-storage"
        },
        {
          "yaw": -2.5769750858137233,
          "pitch": -0.09816228048202014,
          "rotation": 0,
          "target": "12-lower-level"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-higher-side-storage",
      "name": "Higher side storage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.2048783817401691,
        "pitch": 0.10378139876822345,
        "fov": 1.513478732036564
      },
      "linkHotspots": [
        {
          "yaw": -0.9152018139062292,
          "pitch": 0.0340611547440588,
          "rotation": 0,
          "target": "8-steps-to-lower-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-lower-level",
      "name": "Lower level",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.8972067265161687,
        "pitch": 0.022589011400214076,
        "fov": 1.513478732036564
      },
      "linkHotspots": [
        {
          "yaw": 2.0577186786688646,
          "pitch": 0.0874337613377989,
          "rotation": 0,
          "target": "10-storagelower-entrance-door"
        },
        {
          "yaw": 0.088873100779848,
          "pitch": -0.5361426586753524,
          "rotation": 0,
          "target": "13-upper-level"
        },
        {
          "yaw": -2.6379745055373824,
          "pitch": -0.02492692598298696,
          "rotation": 3.141592653589793,
          "target": "0-mid-bridge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-upper-level",
      "name": "Upper level",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.947610817769645,
        "pitch": 0.06342196591390703,
        "fov": 1.513478732036564
      },
      "linkHotspots": [
        {
          "yaw": 0.7483498029730811,
          "pitch": 0.5932968753013697,
          "rotation": 3.141592653589793,
          "target": "12-lower-level"
        },
        {
          "yaw": -1.7663118315587347,
          "pitch": -0.09166086857454481,
          "rotation": 3.141592653589793,
          "target": "0-mid-bridge"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6138343658037986,
          "pitch": -0.01655034599795613,
          "title": "Main door upper level",
          "text": "Top level access - closer to carpark"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
