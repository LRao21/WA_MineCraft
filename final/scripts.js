let mouseHovering = false;
document.addEventListener("mousedown", () => mouseHovering = true);
document.addEventListener("mouseup", () => mouseHovering = false);

let newestCells = [];
let neighboringCells = [];
let appendable = [];
let lastTen = [];

let users = {};
let user = ""; //current person
let pw = "";

let temp = "";

let groups = [];

const default_village = {
  "width": 30,
  "height": 30,
  "builds": [
    {
      "cells": [
        {
          "type": "purple",
          "index": "270"
        },
        {
          "type": "purple",
          "index": "271"
        },
        {
          "type": "purple",
          "index": "272"
        },
        {
          "type": "purple",
          "index": "273"
        },
        {
          "type": "purple",
          "index": "274"
        },
        {
          "type": "purple",
          "index": "275"
        },
        {
          "type": "purple",
          "index": "276"
        },
        {
          "type": "purple",
          "index": "277"
        },
        {
          "type": "purple",
          "index": "278"
        },
        {
          "type": "purple",
          "index": "279"
        },
        {
          "type": "purple",
          "index": "280"
        },
        {
          "type": "purple",
          "index": "281"
        },
        {
          "type": "purple",
          "index": "282"
        },
        {
          "type": "purple",
          "index": "283"
        },
        {
          "type": "purple",
          "index": "284"
        },
        {
          "type": "purple",
          "index": "285"
        },
        {
          "type": "purple",
          "index": "286"
        },
        {
          "type": "purple",
          "index": "287"
        },
        {
          "type": "purple",
          "index": "288"
        },
        {
          "type": "purple",
          "index": "289"
        },
        {
          "type": "purple",
          "index": "290"
        },
        {
          "type": "purple",
          "index": "291"
        },
        {
          "type": "purple",
          "index": "292"
        },
        {
          "type": "purple",
          "index": "293"
        },
        {
          "type": "purple",
          "index": "294"
        },
        {
          "type": "purple",
          "index": "295"
        },
        {
          "type": "purple",
          "index": "296"
        },
        {
          "type": "purple",
          "index": "297"
        },
        {
          "type": "purple",
          "index": "298"
        },
        {
          "type": "purple",
          "index": "299"
        },
        {
          "type": "purple",
          "index": "269"
        },
        {
          "type": "purple",
          "index": "268"
        },
        {
          "type": "purple",
          "index": "267"
        },
        {
          "type": "purple",
          "index": "266"
        },
        {
          "type": "purple",
          "index": "265"
        },
        {
          "type": "purple",
          "index": "264"
        },
        {
          "type": "purple",
          "index": "263"
        },
        {
          "type": "purple",
          "index": "262"
        },
        {
          "type": "purple",
          "index": "261"
        },
        {
          "type": "purple",
          "index": "260"
        },
        {
          "type": "purple",
          "index": "259"
        },
        {
          "type": "purple",
          "index": "258"
        },
        {
          "type": "purple",
          "index": "257"
        },
        {
          "type": "purple",
          "index": "256"
        },
        {
          "type": "purple",
          "index": "255"
        },
        {
          "type": "purple",
          "index": "254"
        },
        {
          "type": "purple",
          "index": "253"
        },
        {
          "type": "purple",
          "index": "252"
        },
        {
          "type": "purple",
          "index": "251"
        },
        {
          "type": "purple",
          "index": "250"
        },
        {
          "type": "purple",
          "index": "249"
        },
        {
          "type": "purple",
          "index": "248"
        },
        {
          "type": "purple",
          "index": "247"
        },
        {
          "type": "purple",
          "index": "246"
        },
        {
          "type": "purple",
          "index": "245"
        },
        {
          "type": "purple",
          "index": "244"
        },
        {
          "type": "purple",
          "index": "243"
        },
        {
          "type": "purple",
          "index": "242"
        },
        {
          "type": "purple",
          "index": "241"
        },
        {
          "type": "purple",
          "index": "240"
        },
        {
          "type": "purple",
          "index": "213"
        },
        {
          "type": "purple",
          "index": "214"
        },
        {
          "type": "purple",
          "index": "184"
        },
        {
          "type": "purple",
          "index": "183"
        },
        {
          "type": "purple",
          "index": "153"
        },
        {
          "type": "purple",
          "index": "154"
        },
        {
          "type": "purple",
          "index": "124"
        },
        {
          "type": "purple",
          "index": "123"
        },
        {
          "type": "purple",
          "index": "93"
        },
        {
          "type": "purple",
          "index": "94"
        },
        {
          "type": "purple",
          "index": "64"
        },
        {
          "type": "purple",
          "index": "63"
        },
        {
          "type": "purple",
          "index": "33"
        },
        {
          "type": "purple",
          "index": "34"
        },
        {
          "type": "purple",
          "index": "4"
        },
        {
          "type": "purple",
          "index": "3"
        },
        {
          "type": "purple",
          "index": "227"
        },
        {
          "type": "purple",
          "index": "228"
        },
        {
          "type": "purple",
          "index": "229"
        },
        {
          "type": "purple",
          "index": "199"
        },
        {
          "type": "purple",
          "index": "198"
        },
        {
          "type": "purple",
          "index": "169"
        },
        {
          "type": "purple",
          "index": "170"
        },
        {
          "type": "purple",
          "index": "140"
        },
        {
          "type": "purple",
          "index": "139"
        },
        {
          "type": "purple",
          "index": "109"
        },
        {
          "type": "purple",
          "index": "110"
        },
        {
          "type": "purple",
          "index": "80"
        },
        {
          "type": "purple",
          "index": "79"
        },
        {
          "type": "purple",
          "index": "49"
        },
        {
          "type": "purple",
          "index": "324"
        },
        {
          "type": "purple",
          "index": "323"
        },
        {
          "type": "purple",
          "index": "353"
        },
        {
          "type": "purple",
          "index": "354"
        },
        {
          "type": "purple",
          "index": "384"
        },
        {
          "type": "purple",
          "index": "383"
        },
        {
          "type": "purple",
          "index": "413"
        },
        {
          "type": "purple",
          "index": "414"
        },
        {
          "type": "purple",
          "index": "444"
        },
        {
          "type": "purple",
          "index": "443"
        },
        {
          "type": "purple",
          "index": "473"
        },
        {
          "type": "purple",
          "index": "474"
        },
        {
          "type": "purple",
          "index": "504"
        },
        {
          "type": "purple",
          "index": "503"
        },
        {
          "type": "purple",
          "index": "533"
        },
        {
          "type": "purple",
          "index": "534"
        },
        {
          "type": "purple",
          "index": "564"
        },
        {
          "type": "purple",
          "index": "563"
        },
        {
          "type": "purple",
          "index": "593"
        },
        {
          "type": "purple",
          "index": "304"
        },
        {
          "type": "purple",
          "index": "303"
        },
        {
          "type": "purple",
          "index": "333"
        },
        {
          "type": "purple",
          "index": "334"
        },
        {
          "type": "purple",
          "index": "364"
        },
        {
          "type": "purple",
          "index": "363"
        },
        {
          "type": "purple",
          "index": "393"
        },
        {
          "type": "purple",
          "index": "394"
        },
        {
          "type": "purple",
          "index": "424"
        },
        {
          "type": "purple",
          "index": "423"
        },
        {
          "type": "purple",
          "index": "453"
        },
        {
          "type": "purple",
          "index": "454"
        },
        {
          "type": "purple",
          "index": "484"
        },
        {
          "type": "purple",
          "index": "483"
        },
        {
          "type": "purple",
          "index": "513"
        },
        {
          "type": "purple",
          "index": "514"
        },
        {
          "type": "purple",
          "index": "544"
        },
        {
          "type": "purple",
          "index": "543"
        },
        {
          "type": "purple",
          "index": "573"
        },
        {
          "type": "purple",
          "index": "574"
        },
        {
          "type": "purple",
          "index": "604"
        },
        {
          "type": "purple",
          "index": "605"
        },
        {
          "type": "purple",
          "index": "606"
        },
        {
          "type": "purple",
          "index": "607"
        },
        {
          "type": "purple",
          "index": "608"
        },
        {
          "type": "purple",
          "index": "609"
        },
        {
          "type": "purple",
          "index": "610"
        },
        {
          "type": "purple",
          "index": "640"
        },
        {
          "type": "purple",
          "index": "641"
        },
        {
          "type": "purple",
          "index": "642"
        },
        {
          "type": "purple",
          "index": "643"
        },
        {
          "type": "purple",
          "index": "673"
        },
        {
          "type": "purple",
          "index": "672"
        },
        {
          "type": "purple",
          "index": "671"
        },
        {
          "type": "purple",
          "index": "670"
        },
        {
          "type": "purple",
          "index": "669"
        },
        {
          "type": "purple",
          "index": "639"
        },
        {
          "type": "purple",
          "index": "638"
        },
        {
          "type": "purple",
          "index": "637"
        },
        {
          "type": "purple",
          "index": "636"
        },
        {
          "type": "purple",
          "index": "635"
        },
        {
          "type": "purple",
          "index": "634"
        },
        {
          "type": "purple",
          "index": "633"
        },
        {
          "type": "purple",
          "index": "603"
        },
        {
          "type": "purple",
          "index": "663"
        },
        {
          "type": "purple",
          "index": "664"
        },
        {
          "type": "purple",
          "index": "694"
        },
        {
          "type": "purple",
          "index": "693"
        },
        {
          "type": "purple",
          "index": "723"
        },
        {
          "type": "purple",
          "index": "724"
        },
        {
          "type": "purple",
          "index": "754"
        },
        {
          "type": "purple",
          "index": "753"
        },
        {
          "type": "purple",
          "index": "783"
        },
        {
          "type": "purple",
          "index": "784"
        },
        {
          "type": "purple",
          "index": "814"
        },
        {
          "type": "purple",
          "index": "813"
        },
        {
          "type": "purple",
          "index": "843"
        },
        {
          "type": "purple",
          "index": "844"
        },
        {
          "type": "purple",
          "index": "874"
        },
        {
          "type": "purple",
          "index": "873"
        },
        {
          "type": "purple",
          "index": "703"
        },
        {
          "type": "purple",
          "index": "704"
        },
        {
          "type": "purple",
          "index": "734"
        },
        {
          "type": "purple",
          "index": "733"
        },
        {
          "type": "purple",
          "index": "763"
        },
        {
          "type": "purple",
          "index": "764"
        }
      ],
      "gridState": [
        "270",
        "271",
        "272",
        "273",
        "274",
        "275",
        "276",
        "277",
        "278",
        "279",
        "280",
        "281",
        "282",
        "283",
        "284",
        "285",
        "286",
        "287",
        "288",
        "289",
        "290",
        "291",
        "292",
        "293",
        "294",
        "295",
        "296",
        "297",
        "298",
        "299",
        "269",
        "268",
        "267",
        "266",
        "265",
        "264",
        "263",
        "262",
        "261",
        "260",
        "259",
        "258",
        "257",
        "256",
        "255",
        "254",
        "253",
        "252",
        "251",
        "250",
        "249",
        "248",
        "247",
        "246",
        "245",
        "244",
        "243",
        "242",
        "241",
        "240",
        "213",
        "214",
        "184",
        "183",
        "153",
        "154",
        "124",
        "123",
        "93",
        "94",
        "64",
        "63",
        "33",
        "34",
        "4",
        "3",
        "227",
        "228",
        "229",
        "199",
        "198",
        "169",
        "170",
        "140",
        "139",
        "109",
        "110",
        "80",
        "79",
        "49",
        "324",
        "323",
        "353",
        "354",
        "384",
        "383",
        "413",
        "414",
        "444",
        "443",
        "473",
        "474",
        "504",
        "503",
        "533",
        "534",
        "564",
        "563",
        "593",
        "304",
        "303",
        "333",
        "334",
        "364",
        "363",
        "393",
        "394",
        "424",
        "423",
        "453",
        "454",
        "484",
        "483",
        "513",
        "514",
        "544",
        "543",
        "573",
        "574",
        "604",
        "605",
        "606",
        "607",
        "608",
        "609",
        "610",
        "640",
        "641",
        "642",
        "643",
        "673",
        "672",
        "671",
        "670",
        "669",
        "639",
        "638",
        "637",
        "636",
        "635",
        "634",
        "633",
        "603",
        "663",
        "664",
        "694",
        "693",
        "723",
        "724",
        "754",
        "753",
        "783",
        "784",
        "814",
        "813",
        "843",
        "844",
        "874",
        "873",
        "703",
        "704",
        "734",
        "733",
        "763",
        "764"
      ],
      "gridSlot": 9,
      "title": "pathway",
      "type": "Path"
    },
    {
      "cells": [
        {
          "type": "purple",
          "index": "156"
        },
        {
          "type": "purple",
          "index": "157"
        },
        {
          "type": "purple",
          "index": "158"
        },
        {
          "type": "purple",
          "index": "159"
        },
        {
          "type": "purple",
          "index": "160"
        },
        {
          "type": "purple",
          "index": "161"
        },
        {
          "type": "purple",
          "index": "131"
        },
        {
          "type": "purple",
          "index": "130"
        },
        {
          "type": "purple",
          "index": "129"
        },
        {
          "type": "purple",
          "index": "128"
        },
        {
          "type": "purple",
          "index": "127"
        },
        {
          "type": "purple",
          "index": "126"
        },
        {
          "type": "purple",
          "index": "96"
        },
        {
          "type": "purple",
          "index": "97"
        },
        {
          "type": "purple",
          "index": "98"
        },
        {
          "type": "purple",
          "index": "99"
        },
        {
          "type": "purple",
          "index": "100"
        },
        {
          "type": "purple",
          "index": "101"
        },
        {
          "type": "purple",
          "index": "71"
        },
        {
          "type": "purple",
          "index": "70"
        },
        {
          "type": "purple",
          "index": "69"
        },
        {
          "type": "purple",
          "index": "68"
        },
        {
          "type": "purple",
          "index": "67"
        },
        {
          "type": "purple",
          "index": "66"
        },
        {
          "type": "purple",
          "index": "36"
        },
        {
          "type": "purple",
          "index": "37"
        },
        {
          "type": "purple",
          "index": "38"
        },
        {
          "type": "purple",
          "index": "39"
        },
        {
          "type": "purple",
          "index": "40"
        },
        {
          "type": "purple",
          "index": "41"
        }
      ],
      "gridState": [
        "156",
        "157",
        "158",
        "159",
        "160",
        "161",
        "131",
        "130",
        "129",
        "128",
        "127",
        "126",
        "96",
        "97",
        "98",
        "99",
        "100",
        "101",
        "71",
        "70",
        "69",
        "68",
        "67",
        "66",
        "36",
        "37",
        "38",
        "39",
        "40",
        "41"
      ],
      "gridSlot": 9,
      "title": "animal pen",
      "type": "animal_pen"
    },
    {
      "cells": [
        {
          "type": "purple",
          "index": "338"
        },
        {
          "type": "purple",
          "index": "339"
        },
        {
          "type": "purple",
          "index": "340"
        },
        {
          "type": "purple",
          "index": "370"
        },
        {
          "type": "purple",
          "index": "371"
        },
        {
          "type": "purple",
          "index": "372"
        },
        {
          "type": "purple",
          "index": "402"
        },
        {
          "type": "purple",
          "index": "401"
        },
        {
          "type": "purple",
          "index": "400"
        },
        {
          "type": "purple",
          "index": "399"
        },
        {
          "type": "purple",
          "index": "398"
        },
        {
          "type": "purple",
          "index": "397"
        },
        {
          "type": "purple",
          "index": "396"
        },
        {
          "type": "purple",
          "index": "366"
        },
        {
          "type": "purple",
          "index": "367"
        },
        {
          "type": "purple",
          "index": "368"
        },
        {
          "type": "purple",
          "index": "369"
        },
        {
          "type": "purple",
          "index": "426"
        },
        {
          "type": "purple",
          "index": "427"
        },
        {
          "type": "purple",
          "index": "428"
        },
        {
          "type": "purple",
          "index": "429"
        },
        {
          "type": "purple",
          "index": "430"
        },
        {
          "type": "purple",
          "index": "431"
        },
        {
          "type": "purple",
          "index": "432"
        },
        {
          "type": "purple",
          "index": "462"
        },
        {
          "type": "purple",
          "index": "461"
        },
        {
          "type": "purple",
          "index": "460"
        },
        {
          "type": "purple",
          "index": "459"
        },
        {
          "type": "purple",
          "index": "458"
        },
        {
          "type": "purple",
          "index": "457"
        },
        {
          "type": "purple",
          "index": "456"
        },
        {
          "type": "purple",
          "index": "486"
        },
        {
          "type": "purple",
          "index": "487"
        },
        {
          "type": "purple",
          "index": "488"
        },
        {
          "type": "purple",
          "index": "489"
        },
        {
          "type": "purple",
          "index": "490"
        },
        {
          "type": "purple",
          "index": "491"
        },
        {
          "type": "purple",
          "index": "492"
        },
        {
          "type": "purple",
          "index": "522"
        },
        {
          "type": "purple",
          "index": "521"
        },
        {
          "type": "purple",
          "index": "520"
        },
        {
          "type": "purple",
          "index": "519"
        },
        {
          "type": "purple",
          "index": "518"
        },
        {
          "type": "purple",
          "index": "517"
        },
        {
          "type": "purple",
          "index": "516"
        }
      ],
      "gridState": [
        "338",
        "339",
        "340",
        "370",
        "371",
        "372",
        "402",
        "401",
        "400",
        "399",
        "398",
        "397",
        "396",
        "366",
        "367",
        "368",
        "369",
        "426",
        "427",
        "428",
        "429",
        "430",
        "431",
        "432",
        "462",
        "461",
        "460",
        "459",
        "458",
        "457",
        "456",
        "486",
        "487",
        "488",
        "489",
        "490",
        "491",
        "492",
        "522",
        "521",
        "520",
        "519",
        "518",
        "517",
        "516"
      ],
      "gridSlot": 9,
      "title": "armorer's house",
      "type": "lodging"
    },
    {
      "cells": [
        {
          "type": "purple",
          "index": "347"
        },
        {
          "type": "purple",
          "index": "348"
        },
        {
          "type": "purple",
          "index": "349"
        },
        {
          "type": "purple",
          "index": "350"
        },
        {
          "type": "purple",
          "index": "351"
        },
        {
          "type": "purple",
          "index": "381"
        },
        {
          "type": "purple",
          "index": "380"
        },
        {
          "type": "purple",
          "index": "379"
        },
        {
          "type": "purple",
          "index": "378"
        },
        {
          "type": "purple",
          "index": "377"
        },
        {
          "type": "purple",
          "index": "407"
        },
        {
          "type": "purple",
          "index": "408"
        },
        {
          "type": "purple",
          "index": "409"
        },
        {
          "type": "purple",
          "index": "410"
        },
        {
          "type": "purple",
          "index": "411"
        },
        {
          "type": "purple",
          "index": "441"
        },
        {
          "type": "purple",
          "index": "440"
        },
        {
          "type": "purple",
          "index": "439"
        },
        {
          "type": "purple",
          "index": "438"
        },
        {
          "type": "purple",
          "index": "437"
        },
        {
          "type": "purple",
          "index": "467"
        },
        {
          "type": "purple",
          "index": "468"
        },
        {
          "type": "purple",
          "index": "469"
        },
        {
          "type": "purple",
          "index": "470"
        },
        {
          "type": "purple",
          "index": "471"
        },
        {
          "type": "purple",
          "index": "501"
        },
        {
          "type": "purple",
          "index": "500"
        },
        {
          "type": "purple",
          "index": "499"
        },
        {
          "type": "purple",
          "index": "498"
        },
        {
          "type": "purple",
          "index": "497"
        },
        {
          "type": "purple",
          "index": "527"
        },
        {
          "type": "purple",
          "index": "528"
        },
        {
          "type": "purple",
          "index": "529"
        },
        {
          "type": "purple",
          "index": "530"
        },
        {
          "type": "purple",
          "index": "531"
        },
        {
          "type": "purple",
          "index": "561"
        },
        {
          "type": "purple",
          "index": "560"
        },
        {
          "type": "purple",
          "index": "559"
        },
        {
          "type": "purple",
          "index": "558"
        },
        {
          "type": "purple",
          "index": "557"
        },
        {
          "type": "purple",
          "index": "587"
        },
        {
          "type": "purple",
          "index": "588"
        },
        {
          "type": "purple",
          "index": "589"
        },
        {
          "type": "purple",
          "index": "590"
        },
        {
          "type": "purple",
          "index": "591"
        }
      ],
      "gridState": [
        "347",
        "348",
        "349",
        "350",
        "351",
        "381",
        "380",
        "379",
        "378",
        "377",
        "407",
        "408",
        "409",
        "410",
        "411",
        "441",
        "440",
        "439",
        "438",
        "437",
        "467",
        "468",
        "469",
        "470",
        "471",
        "501",
        "500",
        "499",
        "498",
        "497",
        "527",
        "528",
        "529",
        "530",
        "531",
        "561",
        "560",
        "559",
        "558",
        "557",
        "587",
        "588",
        "589",
        "590",
        "591"
      ],
      "gridSlot": 9,
      "title": "large house",
      "type": "lodging"
    },
    {
      "cells": [
        {
          "type": "purple",
          "index": "710"
        },
        {
          "type": "purple",
          "index": "711"
        },
        {
          "type": "purple",
          "index": "712"
        },
        {
          "type": "purple",
          "index": "713"
        },
        {
          "type": "purple",
          "index": "714"
        },
        {
          "type": "purple",
          "index": "715"
        },
        {
          "type": "purple",
          "index": "716"
        },
        {
          "type": "purple",
          "index": "746"
        },
        {
          "type": "purple",
          "index": "745"
        },
        {
          "type": "purple",
          "index": "744"
        },
        {
          "type": "purple",
          "index": "743"
        },
        {
          "type": "purple",
          "index": "742"
        },
        {
          "type": "purple",
          "index": "741"
        },
        {
          "type": "purple",
          "index": "740"
        },
        {
          "type": "purple",
          "index": "739"
        },
        {
          "type": "purple",
          "index": "738"
        },
        {
          "type": "purple",
          "index": "708"
        },
        {
          "type": "purple",
          "index": "709"
        },
        {
          "type": "purple",
          "index": "679"
        },
        {
          "type": "purple",
          "index": "680"
        },
        {
          "type": "purple",
          "index": "681"
        },
        {
          "type": "purple",
          "index": "682"
        },
        {
          "type": "purple",
          "index": "683"
        },
        {
          "type": "purple",
          "index": "684"
        },
        {
          "type": "purple",
          "index": "685"
        },
        {
          "type": "purple",
          "index": "651"
        },
        {
          "type": "purple",
          "index": "650"
        },
        {
          "type": "purple",
          "index": "649"
        },
        {
          "type": "purple",
          "index": "678"
        },
        {
          "type": "purple",
          "index": "677"
        },
        {
          "type": "purple",
          "index": "768"
        },
        {
          "type": "purple",
          "index": "769"
        },
        {
          "type": "purple",
          "index": "770"
        },
        {
          "type": "purple",
          "index": "771"
        },
        {
          "type": "purple",
          "index": "772"
        },
        {
          "type": "purple",
          "index": "773"
        },
        {
          "type": "purple",
          "index": "774"
        },
        {
          "type": "purple",
          "index": "775"
        },
        {
          "type": "purple",
          "index": "776"
        },
        {
          "type": "purple",
          "index": "805"
        },
        {
          "type": "purple",
          "index": "804"
        },
        {
          "type": "purple",
          "index": "803"
        },
        {
          "type": "purple",
          "index": "802"
        },
        {
          "type": "purple",
          "index": "801"
        },
        {
          "type": "purple",
          "index": "800"
        },
        {
          "type": "purple",
          "index": "799"
        },
        {
          "type": "purple",
          "index": "798"
        },
        {
          "type": "purple",
          "index": "797"
        },
        {
          "type": "purple",
          "index": "829"
        },
        {
          "type": "purple",
          "index": "830"
        },
        {
          "type": "purple",
          "index": "831"
        }
      ],
      "gridState": [
        "710",
        "711",
        "712",
        "713",
        "714",
        "715",
        "716",
        "746",
        "745",
        "744",
        "743",
        "742",
        "741",
        "740",
        "739",
        "738",
        "708",
        "709",
        "679",
        "680",
        "681",
        "682",
        "683",
        "684",
        "685",
        "651",
        "650",
        "649",
        "678",
        "677",
        "768",
        "769",
        "770",
        "771",
        "772",
        "773",
        "774",
        "775",
        "776",
        "805",
        "804",
        "803",
        "802",
        "801",
        "800",
        "799",
        "798",
        "797",
        "829",
        "830",
        "831"
      ],
      "gridSlot": 9,
      "title": "temple",
      "type": "religion"
    },
    {
      "cells": [
        {
          "type": "purple",
          "index": "206"
        },
        {
          "type": "purple",
          "index": "207"
        },
        {
          "type": "purple",
          "index": "205"
        },
        {
          "type": "purple",
          "index": "204"
        },
        {
          "type": "purple",
          "index": "203"
        },
        {
          "type": "purple",
          "index": "174"
        },
        {
          "type": "purple",
          "index": "144"
        },
        {
          "type": "purple",
          "index": "145"
        },
        {
          "type": "purple",
          "index": "146"
        },
        {
          "type": "purple",
          "index": "147"
        },
        {
          "type": "purple",
          "index": "148"
        },
        {
          "type": "purple",
          "index": "118"
        },
        {
          "type": "purple",
          "index": "117"
        },
        {
          "type": "purple",
          "index": "116"
        },
        {
          "type": "purple",
          "index": "115"
        },
        {
          "type": "purple",
          "index": "114"
        },
        {
          "type": "purple",
          "index": "113"
        },
        {
          "type": "purple",
          "index": "112"
        },
        {
          "type": "purple",
          "index": "82"
        },
        {
          "type": "purple",
          "index": "83"
        },
        {
          "type": "purple",
          "index": "84"
        },
        {
          "type": "purple",
          "index": "85"
        },
        {
          "type": "purple",
          "index": "86"
        },
        {
          "type": "purple",
          "index": "87"
        },
        {
          "type": "purple",
          "index": "88"
        },
        {
          "type": "purple",
          "index": "58"
        },
        {
          "type": "purple",
          "index": "57"
        },
        {
          "type": "purple",
          "index": "56"
        },
        {
          "type": "purple",
          "index": "55"
        },
        {
          "type": "purple",
          "index": "54"
        },
        {
          "type": "purple",
          "index": "53"
        },
        {
          "type": "purple",
          "index": "52"
        },
        {
          "type": "purple",
          "index": "22"
        },
        {
          "type": "purple",
          "index": "23"
        },
        {
          "type": "purple",
          "index": "24"
        },
        {
          "type": "purple",
          "index": "25"
        },
        {
          "type": "purple",
          "index": "26"
        },
        {
          "type": "purple",
          "index": "27"
        },
        {
          "type": "purple",
          "index": "28"
        },
        {
          "type": "purple",
          "index": "142"
        },
        {
          "type": "purple",
          "index": "143"
        },
        {
          "type": "purple",
          "index": "176"
        }
      ],
      "gridState": [
        "206",
        "207",
        "205",
        "204",
        "203",
        "174",
        "144",
        "145",
        "146",
        "147",
        "148",
        "118",
        "117",
        "116",
        "115",
        "114",
        "113",
        "112",
        "82",
        "83",
        "84",
        "85",
        "86",
        "87",
        "88",
        "58",
        "57",
        "56",
        "55",
        "54",
        "53",
        "52",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "142",
        "143",
        "176"
      ],
      "gridSlot": 9,
      "title": "library",
      "type": "public"
    }
  ]
};

let mapGroups = default_village.builds;

const cursorDataDiv = document.getElementById("cursorData");

/*FOR MAP*/
function setUpDefault(){
    var index = 0;
    const newGridForMap = document.getElementById("forMap");
    console.log("started map!");
    for (var h = 0; h < default_village.height; h++){
        var row = document.createElement("div");
        row.className = "row";
        newGridForMap.appendChild(row);

        for (var w = 0; w < default_village.width; w++){
            var col = document.createElement("div");
            col.className = "col";
            col.id = String(index) + "Map";
            index = index + 1;
            col.style.width = String(800/(default_village.width)) + "px";
            col.style.height = String(800/(default_village.width)) + "px";
            col.style.backgroundColor = "white";
            row.appendChild(col);
        } 
    }
    console.log("made grid");

    for (let bL = 0; bL < default_village.builds.length; bL++){
        for (var c = 0; c < default_village.builds[bL].cells.length; c++){
            var cellsFrom = default_village.builds[bL].cells[c];
            if (cellsFrom!=null){
                var cellIndex = cellsFrom.index + "Map";
                document.getElementById(cellIndex).style.backgroundColor = "purple";
                console.log("made " + cellIndex + " purple!");
        
                document.getElementById(cellIndex).addEventListener("mouseover", function(event) {
                    cursorDataDiv.style.fontSize = "22px";
                    cursorDataDiv.style.display = "block";
                    image = "";
                    if (default_village.builds[bL].type == "Path"){
                        cursorDataDiv.innerHTML = "<i style = 'color:pink'; class='fa-solid fa-road-circle-check'></i>";
                        image = "images/dirtPath.jpeg"
                    } else if (default_village.builds[bL].type == "animal_pen"){
                        cursorDataDiv.innerHTML = "<i style = 'color:pink'; class='fa-solid fa-shield-cat'></i>";
                        image = "images/animal_pen.png"
                    } else if (default_village.builds[bL].type == "lodging"){
                        cursorDataDiv.innerHTML = "<i style = 'color:pink'; class='fa-solid fa-house'></i>";
                        if (default_village.builds[bL].title == "armorer's house"){
                          image = "images/armorer.png"
                        } else if (default_village.builds[bL].title == "large house"){
                          image = "images/bigHouse1.png"
                        }
                    } else if (default_village.builds[bL].type == "religion"){
                        cursorDataDiv.innerHTML = "<i style = 'color:pink'; class='fa-solid fa-person-praying'></i>";
                        image = "images/temple.png"
                    } else if (default_village.builds[bL].type == "public"){
                        cursorDataDiv.innerHTML = "<i style = 'color:pink'; class='fa-solid fa-book'></i>";
                        image = "images/library.png"
                    }
                    cursorDataDiv.innerHTML += ", Title: " + String(default_village.builds[bL].title);
                    cursorDataDiv.innerHTML +="<img style = 'width: 200px; height: 250px;' src = '" + image + "'>";

                    document.addEventListener("mousemove", function(event) {
                        cursorDataDiv.style.left = event.pageX + 10 + "px";  
                        cursorDataDiv.style.top = event.pageY + 10 + "px";  
                    });
                });
                document.getElementById(cellIndex).addEventListener("click", function() {
                  if (default_village.builds[bL].title == "pathway"){
                    window.location.hash = "#path";
                  } else if (default_village.builds[bL].title == "animal pen"){
                    window.location.hash = "#animalPen";
                  } else if (default_village.builds[bL].title == "armorer's house"){
                    window.location.hash = "#armorer";
                  } else if (default_village.builds[bL].title == "large house"){
                    window.location.hash = "#largeHouse1";
                  } else if (default_village.builds[bL].title == "temple"){
                    window.location.hash = "#temple";
                  } else if (default_village.builds[bL].title == "library"){
                    window.location.hash = "#library";
                  }
                });

                document.getElementById(cellIndex).addEventListener("mouseleave", function() {
                    cursorDataDiv.style.display = "none";
                });
    
            } else {
                console.log("cell is null!");
            }
        }
    }
    const profiles = document.getElementsByClassName("defaultData")[0];
    if (profiles!=null){
        profiles.style.display = "grid";
    }
}

function createFromFile(){
    return false;
}

/*FOR FILE HANDLING*/
function createFile(){
    const currentGrid = document.getElementsByClassName("emptyGrid")[0];
    var width = 0;
    var height = 0;
    if (currentGrid.children!=null){
        width = currentGrid.children.length;
        if (currentGrid.children[0]!=null){
            height = currentGrid.children[0].children.length;
        }
    }
    console.log("width: " + width);
    console.log("height: " + height);

    const myFile = {};
    myFile.width = width;
    myFile.height = height;
    myFile.builds = groups;
    console.log("made file");
    const jsonString = JSON.stringify(myFile, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    console.log("made blob");
    const a = document.getElementById("jsonFile");
    a.href = URL.createObjectURL(blob);
    a.download = "your_build.json";
    setTimeout(() => URL.revokeObjectURL(url), 100);
    console.log("done with file");
}

/* FOR GRID */
function saveLayer(){
    if (user===""){
        alert("Sign in to save your work!");
        return false;
    }


    return false;
}

//designates a group as a build, creates a build object
function createBuild(){
    if (neighboringCells.length!=0){
        var newGridFor = document.getElementsByClassName("emptyGrid")[0];
        createGroup(neighboringCells, newGridFor);
        neighboringCells = [];
        var buildPath = document.getElementById("buildLayers");
        buildPath.innerHTML += ((groups[groups.length-1].title) + "<br>");
    } else {
        alert("There are no grid sections prepped for building.");
    }
    return false;
}

//restores most recent grid state prior to most current change
function undoLast(){
    var newGridFor = document.getElementsByClassName("emptyGrid")[0];
    var rows = newGridFor.children;

    for (var j = 0; j < groups.length; j++){
        if (groups[j].gridSlot === (lastTen.length - 1)){
            neighboringCells = structuredClone(groups[j].gridState);
            groups.splice(i,1);
            console.log("Removed one group, groups remaining: " + String(groups.length));
            var parts = document.getElementById("buildLayers").innerHTML.split("<br>");
            document.getElementById("buildLayers").innerHTML = "";
            for (var p = 0; p < parts.length - 2; p++){
                 console.log(parts.length - 1);
                 document.getElementById("buildLayers").innerHTML = document.getElementById("buildLayers").innerHTML + parts[p];
            }
        }
    }

    var toRestore;
    if (lastTen.length === 0){
        console.log("nothing to restore");
        var blankSet = blankGrid(rows.length, rows[0].children.length, 1);
        lastTen.push(blankSet);
        return false;
    }
    toRestore = lastTen.pop();
    toRestore = lastTen[lastTen.length - 1];
    
    if (toRestore!= null && toRestore.children!=null && toRestore.children[0]!=null){
        console.log("got Last!")
        console.log("Height: " + String((toRestore.children).length))
        console.log("Width: " + String((toRestore.children[0].children).length))

        for (var i = 0; i < rows.length; i++){
            var cells = rows[i].children;
            var ogRows = toRestore.children;
            var ogCells = ogRows[i].children;
            for (var j = 0; j < cells.length; j++){
                cells[j].style.backgroundColor = 
                ogCells[j].style.backgroundColor;
                if (ogCells[j].style.backgroundColor === "red"){
                    console.log()
                    for (var n = 0; n < neighboringCells.length; n++){
                        if (neighboringCells[n]===ogCells[j].id){
                            neighboringCells.splice(n,1);
                            n=0;
                        }
                    }
                }
            }
        }
    }

    return false;
}

//restores the grid to a blank state
function resetGrid(){
    var newGridFor = document.getElementsByClassName("emptyGrid")[0];
    var rows = newGridFor.children;
    for (var i = 0; i < rows.length; i++){
        var cells = rows[i].children;
        for (var j = 0; j < cells.length; j++){
            if (cells[j].style.backgroundColor != "white"){
                cells[j].style.backgroundColor = "white";
            }
        }
    }
    groups = [];
    neighboringCells = [];
    var copy = copyGrid(rows.length, rows[0].children.length, 1, newGridFor);
    if (lastTen.length >= 10){
        var old = lastTen.splice(0,1);
    }
    lastTen.push(copy);
    document.getElementById("buildLayers").innerHTML = "";
    return false;
}

//helper function to find a group given a cell
function findGroup(cell){
    var index = 0;
    for (var l = 0; l < groups.length; l++){
        var cells = groups[l].gridState;
        for (var k = 0; k < cells.length; k++){
            if (cell.id === cells[k]){
                return l;
            }
        }
    }
    return -1;
}
//helper function to find other cells in an object
function findNeighbors(toPopulate, grid, width, height, scale, col, color){
    var rowCount = Math.floor(height/scale);
    var colCount = Math.floor(width/scale);

    var colLocal = Math.floor((parseInt(col.id,10) % colCount)); //tells me which column a cell is
    var rowLocal = Math.floor(((parseInt(col.id))/rowCount)); //tells me which row a cell is in
    console.log("rowCount: " + String(rowCount));
    console.log("colCount: " + String(colCount));
    console.log("rowLocal: " + String(rowLocal));
    console.log("colLocal: " + String(colLocal));

        var rightNeighbor = col;
        var lefttNeighbor = col;
        var topNeighbor = col;
        var bottomNeighbor = col;
        if (colLocal + 1 <= colCount -1){
            rightNeighbor = document.getElementById(String(parseInt(col.id)+1));
        }
        if (colLocal -1 >= 0){
            lefttNeighbor = document.getElementById(String(parseInt(col.id)-1));
        }
        if (rowLocal -1 >= 0){
            topNeighbor = document.getElementById(String(parseInt(col.id)-colCount));
        }
        if (rowLocal + 1 <= rowCount -1){
            bottomNeighbor = document.getElementById(String(parseInt(col.id)+colCount));
        }

        console.log("found neighbors!");
        console.log("col id: " + String(col.id));
        console.log("right id: " + String(rightNeighbor.id));
        console.log("left id: " + String(lefttNeighbor.id));
        console.log("top id: " + String(topNeighbor.id));
        console.log("bottom id: " + String(bottomNeighbor.id));

        if (rightNeighbor!=null && rightNeighbor.style.backgroundColor === color){
            if (!toPopulate.includes(rightNeighbor.id)){
                toPopulate.push(rightNeighbor.id);
                console.log("right is a match!");
                findNeighbors(toPopulate, grid, width, height, scale, rightNeighbor, color);
            }
        } else if (rightNeighbor!=null && rightNeighbor.style.backgroundColor === "purple" 
            && document.getElementById("appendState").checked){
            var oldGroup = findGroup(rightNeighbor);
            if (oldGroup > -1){
                groups.splice(oldGroup,1);
                console.log("removed a prior");
            }
            rightNeighbor.style.backgroundColor = "blue";
            if (!toPopulate.includes(rightNeighbor.id)){
                toPopulate.push(rightNeighbor.id);
                findNeighbors(toPopulate, grid, width, height, scale, rightNeighbor, color);
            }
        }
        if (lefttNeighbor!=null && lefttNeighbor.style.backgroundColor === color){
            if (!toPopulate.includes(lefttNeighbor.id)){
                toPopulate.push(lefttNeighbor.id);
                console.log("left is a match!");
                findNeighbors(toPopulate, grid, width, height, scale, lefttNeighbor, color);
            }
        } else if (lefttNeighbor!=null && lefttNeighbor.style.backgroundColor === "purple"
            && document.getElementById("appendState").checked){
            var oldGroup = findGroup(lefttNeighbor);
            if (oldGroup > -1){
                groups.splice(oldGroup,1);
                console.log("removed a prior");
            }
            lefttNeighbor.style.backgroundColor = "blue";
            if (!toPopulate.includes(lefttNeighbor.id)){
                toPopulate.push(lefttNeighbor.id);
                findNeighbors(toPopulate, grid, width, height, scale, lefttNeighbor, color);
            }
        }
        if (topNeighbor!=null && topNeighbor.style.backgroundColor === color){
            if (!toPopulate.includes(topNeighbor.id)){
                toPopulate.push(topNeighbor.id);
                console.log("top is a match!");
                findNeighbors(toPopulate, grid, width, height, scale, topNeighbor, color);
            }
        } else if (topNeighbor!=null && topNeighbor.style.backgroundColor === "purple"
            && document.getElementById("appendState").checked){
            var oldGroup = findGroup(topNeighbor);
            if (oldGroup > -1){
                groups.splice(oldGroup,1);
                console.log("removed a prior");
            }
            topNeighbor.style.backgroundColor = "blue";
            if (!toPopulate.includes(topNeighbor.id)){
                toPopulate.push(topNeighbor.id);
                findNeighbors(toPopulate, grid, width, height, scale, topNeighbor, color);
            }
            
        }
        if (bottomNeighbor!=null && bottomNeighbor.style.backgroundColor === color){
            if (!toPopulate.includes(bottomNeighbor.id)){
                toPopulate.push(bottomNeighbor.id);
                console.log("bottom is a match!");
                findNeighbors(toPopulate, grid, width, height, scale, bottomNeighbor, color);
            }
        } else if (bottomNeighbor!=null && bottomNeighbor.style.backgroundColor === "purple"
            && document.getElementById("appendState").checked){
            var oldGroup = findGroup(bottomNeighbor);
            if (oldGroup > -1){
                groups.splice(oldGroup,1);
                console.log("removed a prior");
            }
            bottomNeighbor.style.backgroundColor = "blue";
            if (!toPopulate.includes(bottomNeighbor.id)){
                toPopulate.push(bottomNeighbor.id);
                findNeighbors(toPopulate, grid, width, height, scale, bottomNeighbor, color);
            }
        }
        return false;
    }

//helper function to create a blank grid
function blankGrid(height, width, scale){
    var newGrid = document.createElement("div");
    var index = 0
    for (var i = 0; i < height/scale; i++) {
        var row = document.createElement("div");
        row.className = "row";
        newGrid.appendChild(row);
  
        for (var j = 0; j < (width/scale); j++) {
          var col = document.createElement("div");
          col.className = "col";
          col.id = String(index);
          index = index + 1;
          //sets cell size to fill the full frame always
          col.style.width = String(800/(width/scale)) + "px";
          col.style.height = String(800/(width/scale)) + "px";
          col.style.backgroundColor = "white";
          row.appendChild(col);
        }
        console.log("height: " + String(height));
        console.log("width: " + String(width));
        console.log("row size: " + String(newGrid.children.length) + ",row count: " + String(i));
    }
    return newGrid;
}
//helper function to copy the grid so we can save frames
function copyGrid(height, width, scale){
    var newGrid = document.createElement("div");
    var index = 0
    for (var i = 0; i < height/scale; i++) {
        var row = document.createElement("div");
        row.className = "row";
        newGrid.appendChild(row);
  
        for (var j = 0; j < (width/scale); j++) {
          var col = document.createElement("div");
          col.className = "col";
          col.id = String(index);
          index = index + 1;
          //sets cell size to fill the full frame always
          col.style.width = String(800/(width/scale)) + "px";
          col.style.height = String(800/(width/scale)) + "px";
          var ogCell = document.getElementById(String(col.id));
          col.style.backgroundColor = ogCell.style.backgroundColor;
          row.appendChild(col);
        }
    }
    return newGrid;
}

//helper function to save groups when they are made
function createGroup(neighboringCells, currentGrid){
    const structure = {};
    var cells = [];
    var gridState = [];
    for (var i = 0; i < neighboringCells.length; i++){
        const block = {};
        block.type = (document.getElementById(neighboringCells[i]).style.backgroundImage);
        document.getElementById(neighboringCells[i]).style.backgroundColor = "purple";
        block.index = neighboringCells[i];
        cells.push(block);
        gridState.push(neighboringCells[i]);
    }
    structure.cells = cells;
    structure.gridState = gridState;
    structure.gridSlot = lastTen.length - 1;
    structure.title = document.getElementById("title").value;
    structure.type = document.getElementById("type").value;
    groups.push(structure);
    console.log("group added: " + groups.length + ", " + structure.title + ", " + structure.type);
    var newGridFor = document.getElementsByClassName("emptyGrid")[0];
    var copy = copyGrid(height, width, scale, newGridFor);
    if (lastTen.length >= 10){
        var old = lastTen.splice(0,1);
    }
    lastTen.push(copy);
    return false;
}

//creates grid given input for width and height
function calculateGrid() {
    lastTen = [];
    let scale = parseInt(document.getElementById("scale").value,10);
    let height = parseInt(document.getElementById("height").value,10);
    let width = parseInt(document.getElementById("width").value,10);
    try{
        if (isNaN(width)) {
            alert("You must enter a width");
            return false;
        } else if (width<=0){
            alert("You must enter a width");
            return false;
        } else if ((800*scale)/width < 23){
            alert("Please enter a smaller width or the grid won't fit!");
            return false;
        }
        if (isNaN(height)) {
            alert("You must enter a height");
            return false;
        } else if (height<=0){
            alert("You must enter a height");
            return false;
        }
        if (isNaN(scale)) {
            alert("You must enter a scale");
            return false;
        } else if (scale<1){
            alert("You must enter a scale of at least 1");
            return false;
        }
    } catch (err){
        alert("error: " + err.message);
        return false;
    }
    var newGridFor = document.getElementsByClassName("emptyGrid")[0];
    newGridFor.innerHTML = "";
    var index = 0
    for (var i = 0; i < height/scale; i++) {
         var row = document.createElement("div");
        row.className = "row";
        newGridFor.appendChild(row);
  
        for (var j = 0; j < (width/scale); j++) {
        var col = document.createElement("div");
          col.className = "col";
          col.id = String(index);
          index = index + 1;
          //sets cell size to fill the full frame always
          col.style.width = String(800/(width/scale)) + "px";
          col.style.height = String(800/(width/scale)) + "px";
          //event listeners for clicks
          col.addEventListener("click", function() {
            if (this.style.backgroundColor != "blue" && this.style.backgroundColor != "purple"){
                this.style.backgroundColor = 
                (this.style.backgroundColor === "red") ? "white" : "red";
                
                var copy = copyGrid(height, width, scale, newGridFor);
                if (lastTen.length >= 10){
                    var old = lastTen.splice(0,1);
                }
                lastTen.push(copy);
            }
            });
            
          col.addEventListener("mouseover", function(e) {
            e.preventDefault()
            if (mouseHovering && this.style.backgroundColor != "blue") {
                this.style.backgroundColor = "red";
                var copy = copyGrid(height, width, scale, newGridFor);
                if (lastTen.length >= 10){
                    var old = lastTen.splice(0,1);
                }                
                lastTen.push(copy);
            } else if (this.style.backgroundColor === "purple") {
                var groupIndex = findGroup(this);
                if (groupIndex > -1){
                    console.log("time to title!");
                    var titlePlace = document.getElementsByClassName("buildTitle")[0];
                    const titlePop = document.createElement("p");
                    titlePop.innerText = groups[groupIndex].title;
                    titlePlace.appendChild(titlePop);
                    titlePlace.style.left = e.pageX + 'px';
                    titlePlace.style.top = e.pageY + 'px';
                    titlePlace.style.backgroundColor = "wheat";
                } else {
                    console.log("how is this not a group?");
                }
            }
            });
          col.addEventListener('dblclick', function() {
            if (this.style.backgroundColor != "blue"){
                alert('This part of the grid is now prepped for build assignment!');
                this.style.backgroundColor = "red";
                neighboringCells.push(this.id);
                findNeighbors(neighboringCells, newGridFor, width, height, scale,
                    this, this.style.backgroundColor);
                console.log("done!");
                this.style.backgroundColor = "blue";
                for (var k = 0; k < neighboringCells.length; k++){
                    document.getElementById(neighboringCells[k]).style.backgroundColor = "blue";
                    console.log("colored!");
                }
                var copy = copyGrid(height, width, scale, newGridFor);
                if (lastTen.length >= 10){
                    var old = lastTen.splice(0,1);
                }
                lastTen.push(copy);
            }
            });
            col.style.backgroundColor = "white";
            row.appendChild(col);
        }
      }
      var copy = blankGrid(height, width, scale);
        if (lastTen.length >= 10){
            var old = lastTen.splice(0,1);
        }
        lastTen.push(copy);
    return false;
  }


/* FOR REVIEWS */

//filters reviews to keep only those from the "Minecraft Resources" category
function removeNotResource(){
    var allReviews = document.getElementsByClassName("aReview");
    for (var i=0; i < allReviews.length; i++){
        var metaTableParts = allReviews[i].querySelectorAll('table tr td');
        var found = false;
        for (var j = 0; j < metaTableParts.length; j++) {
            if (metaTableParts[j].querySelector('p.Minecraft_Resources') != null){
                found = true;
            }
        }
        if (!found){
            allReviews[i].style.display = "none";
        } else {
            allReviews[i].style.display = "inline-block";
        }
    }
}

//filters reviews to keep only those from the "Village Structures" category
function removeNotVillage(){
    var allReviews = document.getElementsByClassName("aReview");
    for (var i=0; i < allReviews.length; i++){
        var metaTableParts = allReviews[i].querySelectorAll('table tr td');
        var found = false;
        for (var j = 0; j < metaTableParts.length; j++) {
            if (metaTableParts[j].querySelector('p.Village_Structures') != null){
                found = true;
            }
        }
        if (!found){
            allReviews[i].style.display = "none";
        } else {
            allReviews[i].style.display = "inline-block";
        }
    }
}

//filters reviews to keep only those from the "In-Game Structures" category
function removeNotInGame(){
    var allReviews = document.getElementsByClassName("aReview");
    for (var i=0; i < allReviews.length; i++){
        var metaTableParts = allReviews[i].querySelectorAll('table tr td');
        var found = false;
        for (var j = 0; j < metaTableParts.length; j++) {
            if (metaTableParts[j].querySelector('p.In-Game_Structures') != null){
                found = true;
            }
        }
        if (!found){
            allReviews[i].style.display = "none";
        } else {
            allReviews[i].style.display = "inline-block";
        }
    }
}

//filters reviews to keep only those from the "Minecraft Features" category
function removeNotFeatures(){
    var allReviews = document.getElementsByClassName("aReview");
    for (var i=0; i < allReviews.length; i++){
        var metaTableParts = allReviews[i].querySelectorAll('table tr td');
        var found = false;
        for (var j = 0; j < metaTableParts.length; j++) {
            if (metaTableParts[j].querySelector('p.Minecraft_Features') != null){
                found = true;
            }
        }
        if (!found){
            allReviews[i].style.display = "none";
        } else {
            allReviews[i].style.display = "inline-block";
        }
    }
}

//filters reviews to keep only those from the "In-Game Experiences" category
function removeNotExperience(){
    var allReviews = document.getElementsByClassName("aReview");
    for (var i=0; i < allReviews.length; i++){
        var metaTableParts = allReviews[i].querySelectorAll('table tr td');
        var found = false;
        for (var j = 0; j < metaTableParts.length; j++) {
            if (metaTableParts[j].querySelector('p.In-Game_Experiences') != null){
                found = true;
            }
        }
        if (!found){
            allReviews[i].style.display = "none";
        } else {
            allReviews[i].style.display = "inline-block";
        }
    }
}

//filters reviews to keep only those from the "Tutorial Experiences" category
function removeNotTutorial(){
    var allReviews = document.getElementsByClassName("aReview");
    for (var i=0; i < allReviews.length; i++){
        var metaTableParts = allReviews[i].querySelectorAll('table tr td');
        var found = false;
        for (var j = 0; j < metaTableParts.length; j++) {
            if (metaTableParts[j].querySelector('p.Tutorial_Experiences') != null){
                found = true;
            }
        }
        if (!found){
            allReviews[i].style.display = "none";
        } else {
            allReviews[i].style.display = "inline-block";
        }
    }
}

//function to reset order of reviews back to OG (order of ids)
function restoreAllReviews(){
    var allReviews = Array.from(document.getElementsByClassName("aReview"));
    allReviews.sort(function(i,j){
        if (i.id < j.id){
            return -1;
        } else if (i.id > j.id){
            return 1;
        } else {
            return 0;
        }
    });
    var parent = allReviews[0].parentNode;

    for (var k=0; k < allReviews.length; k++){
        parent.appendChild(allReviews[k]);
        allReviews[k].style.display = "inline-block";
    }   
}

//helper function to make date objects from the strings in the meta-content tables
function makeDate(dateMMDDYYYY){
    var month = parseInt(dateMMDDYYYY.split("/")[0],10)-1;
    var day = parseInt(dateMMDDYYYY.split("/")[1],10);
    var year = parseInt(dateMMDDYYYY.split("/")[2],10);
    console.log(new Date(year,month,day));
    return new Date(year,month,day);
}

//sorting function for the reviews; sorts them in chronological order (newest first)
function sortByDate(){
    var allReviews = Array.from(document.getElementsByClassName("aReview"));
    allReviews.sort(function(i,j){
       var first = makeDate(i.querySelector("td.date").textContent);
       var second = makeDate(j.querySelector("td.date").textContent);

        if (first < second){
            return 1;
        } else if (first > second){
            return -1;
        } else {
            return 0;
        }
    });
    var parent = allReviews[0].parentNode;

    for (var k=0; k < allReviews.length; k++){
        parent.appendChild(allReviews[k]);
        allReviews[k].style.display = "inline-block";
    }   
    
}

//sorting function for the reviews; sorts them in alphabetical order
function sortByName(){
    var allReviews = Array.from(document.getElementsByClassName("aReview"));
    allReviews.sort(function(i,j){
       var first = i.querySelector("button.collapsible").textContent;
       var second = j.querySelector("button.collapsible").textContent;

        if (first < second){
            return -1;
        } else if (first > second){
            return 1;
        } else {
            return 0;
        }
    });
    var parent = allReviews[0].parentNode;

    for (var k=0; k < allReviews.length; k++){
        parent.appendChild(allReviews[k]);
        allReviews[k].style.display = "inline-block";
    }   
}

//function to show review when associate button is clicked
function showArticle(button){
  var reviews = document.getElementsByClassName("aReview");
  console.log("got the reviews!")
  for (let i = 0; i < reviews.length; i++){
    if (reviews[i].contains(button)){
      var reviewClicked = reviews[i];
      var reviewContent = reviewClicked.getElementsByClassName("review")[0];
      var reviewMeta = reviewClicked.getElementsByClassName("meta-content")[0]
      if (reviewContent.style.display !="inline-block"){
        reviewContent.style.display = "inline-block";
        reviewMeta.style.display = "inline-block";
      } else {
        reviewContent.style.display = "none";
        reviewMeta.style.display = "none";
      }
      console.log("showed the review!")
    }
  }
}

  /* FOR ABOUT PAGE FAQS */

//function to show FAQ content when associated button is clicked
function showContent(button){
  var faqs = document.getElementsByClassName("faq");
  console.log("got the faqs!")
  for (let i = 0; i < faqs.length; i++){
    if (faqs[i].contains(button)){
      var faqsClicked = faqs[i];
      var faqsContent = faqsClicked.getElementsByClassName("faq_content")[0];
      if (faqsContent.style.display !="inline-block"){
        faqsContent.style.display = "inline-block";
      } else {
        faqsContent.style.display = "none";
      }
      console.log("showed the faq!")
    }
  }
}