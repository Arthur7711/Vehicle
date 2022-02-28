export let cardsforuser = [
  { id: "DeviceList", title: "Vehicles in Fleet", order: 3 },
  { id: "DeviceMap", title: "Vehicle Map" },
  { id: "OfflineVehicles", title: "Offline Vehicles" },
  { id: "BadBatteries", title: "Bad Batteries" },
  { id: "VehiclesNotCharged", title: "Not Charged" },
  { id: "VehicleImpactExtreme", title: "Extreme Impacts" },
  { id: "VehicleImpactAbnormal", title: "Abnormal Impacts" },
  { id: "FleetUsageLong", title: "Vehicle Utilization (most hours)" },
  { id: "FleetUsageShort", title: "Vehicle Utilization (least hours)" },
];

export let carddata = {
  DeviceList: {
    status: "bg-info",
    list: "DeviceList",
    title: "Vehicles",
    count: 66,
    fleet: "1f144d69-8cb0-4341-91ff-676f4ffcc901",
    cardType: "List",
    description: "The list of all vehicles in the fleet",
    sparkline: [
      ["day", "count"],
      ["day2", "count2"],
    ],
  },
  DeviceMap: {
    status: "bg-info",
    list: "DeviceMap",
    title: "Vehicle Map",
    count: 66,
    fleet: "1f144d69-8cb0-4341-91ff-676f4ffcc901",
    cardType: "Map",
    description: "A map of all vehicles in the fleet",
  },
  OfflineVehicles: {
    status: "bg-info",
    list: "OfflineVehicles",
    title: "Offline Vehicles",
    count: 0,
    fleet: "1f144d69-8cb0-4341-91ff-676f4ffcc901",
    cardType: "List",
    description:
      "These vehicles are offline. They have not connected to the Telematics Platform in the last 72 hours and have not provided any data. Offline vehicles are usually not shown in tracking maps and reports. These vehicles have either been parked in a location where there is no connectivity, or have lost power.",
  },
  BadBatteries: {
    status: "bg-warning",
    list: "BadBatteries",
    title: "Bad Batteries",
    count: 1,
    fleet: "1f144d69-8cb0-4341-91ff-676f4ffcc901",
    cardType: "List",
    description:
      "These vehicles are reporting low battery voltages and require charging or replacing.",
  },
  VehiclesNotCharged: {
    status: "bg-danger",
    list: "VehiclesNotCharged",
    title: "Not Charged",
    count: 26,
    fleet: "1f144d69-8cb0-4341-91ff-676f4ffcc901",
    cardType: "List",
    description: "Vehicles that have not been charged for at least 48 hours",
  },
  VehicleImpactExtreme: {
    status: "bg-danger",
    list: "VehicleImpactExtreme",
    title: "Extreme Impacts",
    count: 6,
    fleet: "1f144d69-8cb0-4341-91ff-676f4ffcc901",
    cardType: "List",
    description: "A list of recent impacts of over 7G",
  },
  VehicleImpactAbnormal: {
    status: "bg-danger",
    list: "VehicleImpactAbnormal",
    title: "Abnormal Impacts",
    count: 105,
    fleet: "1f144d69-8cb0-4341-91ff-676f4ffcc901",
    cardType: "List",
    description: "A list of recent impacts between 5G and 7G",
  },
  FleetUsageLong: {
    status: "bg-info",
    list: "FleetUsageLong",
    title: "Vehicle Utilization (most hours)",
    count: 10,
    fleet: "1f144d69-8cb0-4341-91ff-676f4ffcc901",
    cardType: "List",
    description: "Top 10 used vehicles by hours in a week",
  },
  FleetUsageShort: {
    status: "bg-info",
    list: "FleetUsageShort",
    title: "Vehicle Utilization (least hours)",
    count: 20,
    fleet: "1f144d69-8cb0-4341-91ff-676f4ffcc901",
    cardType: "List",
    description: "20 Least utilized (hours) vehicles in a week",
  },
};

export let carddatadetails = {
  DeviceList: {
    title: "Vehicles in fleet",
    headings: ["IMEI", "Label", "Last Seen", "View Vehicle"],
    data: [
      {
        IMEI: "355857050846447",
        Label: "5FCBC13B7K1000244 #403 MAILROOM",
        "Last Seen": "10/6/2021 1:03:28 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/b6c4e2e8-9b0a-46e1-9569-d95d27269849\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050852486",
        Label: "5FCBC13B6K1000283 #502 MAINTENANCE",
        "Last Seen": "10/6/2021 1:09:43 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/c13082e6-ff76-4997-987e-379784383eb8\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051271405",
        Label: "5FCBC13B5K1000260 #578 OPS CUSTODIAL",
        "Last Seen": "10/6/2021 12:16:24 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/b46c0b19-4dc7-4ad7-9d21-52eba685e396\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051283277",
        Label: "5FCBC13B4K1000248 #204 CAMPUS STORE",
        "Last Seen": "10/6/2021 10:58:57 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/f5946676-d6fd-4b5a-b87c-4da5f58d6b44\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051262297",
        Label: "5FCBC13B9K1000259 #586 OPS CUSTODIAL",
        "Last Seen": "10/6/2021 1:09:29 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/068bf13d-9bec-4750-9214-a0ea2e0ede9b\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050849680",
        Label: "5FCBC13B9K1000276 #558 MAINTENANCE",
        "Last Seen": "10/6/2021 11:30:48 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/2bc8874d-95ad-4b3e-9aab-823143cd02c9\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051282758",
        Label: "5FCBC13B4K1000265 #401 RECEIVING",
        "Last Seen": "10/6/2021 12:55:35 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/d505ce09-c739-42e5-b768-81ecd232b38b\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051260853",
        Label: "5FCBC13B5K1000257 #583 OPS CUSTODIAL",
        "Last Seen": "10/6/2021 1:08:29 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/68dfd47c-ef15-4e00-98f1-edaf55761d42\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051260978",
        Label: "5FCBC13BXK1000285 #504 MAINTENANCE",
        "Last Seen": "10/6/2021 12:25:01 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/f580bd59-5ed4-4eff-8ddd-3de3aae5ec98\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050838253",
        Label: "5FCBC13B7K1000275 #556 GROUNDS",
        "Last Seen": "10/6/2021 9:59:43 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/3212bc30-0152-47bd-a0e3-c5554d9e09a9\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050849920",
        Label: "5FCBE13C4K1000236 #304 CAMPUS POLICE",
        "Last Seen": "10/6/2021 12:09:41 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/a5361a0e-e9f1-45df-8b32-33db390ce2d4\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051048910",
        Label: "5FCBC13B6K1000235 # 305 AMBULANCE",
        "Last Seen": "9/11/2021 5:29:08 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/e577f389-3711-4c76-a1f1-3f3926f1d11d\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050852569",
        Label: "5FCBC13B2K1000264 #577 OPS CUSTODIAL",
        "Last Seen": "10/6/2021 12:08:25 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/7c234e54-5d5b-43a3-8594-9a6a42a207af\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050924848",
        Label: "5FCBC13B1K1000238 #562 SUST RECYCLING",
        "Last Seen": "10/6/2021 12:08:05 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/1c602cf8-b17f-4d3e-9767-0de55d44e5f8\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051282766",
        Label: "5FCBC13B2K1000247 #201 REPROGRAPHIC",
        "Last Seen": "10/6/2021 10:22:16 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/8a44ca5e-e9b7-4d99-9bd3-abc367fc61c8\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051066755",
        Label: "5FCBC13B3K1000256 #576-0256 custodial",
        "Last Seen": "10/6/2021 9:24:01 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/77f118dd-c7a9-4dc3-9653-ac691a215212\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050845886",
        Label: "5FCBC13B0K1000263 #590 OPS CUSTODIAL",
        "Last Seen": "10/6/2021 12:17:42 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/a73c755b-5883-41dc-9eb0-7c267cf5ee04\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050851611",
        Label: "5FCBC13B3K1000242 #206 TRANSPORTATION",
        "Last Seen": "10/6/2021 12:10:32 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/7e7b8ef2-9098-4fc6-91b6-07ed42de0e9d\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050847403",
        Label: "5FCBC13B0K1000280 #561 GROUNDS",
        "Last Seen": "10/6/2021 11:34:18 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/42d3eb2c-b4bb-46df-8f67-a8ea7974a81c\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051262198",
        Label: "5FCBC13B0K1000246 #102 EVENTS",
        "Last Seen": "10/6/2021 10:38:18 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/4097238b-ebbd-4a3b-96de-3b912292420d\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050946007",
        Label: "5FCBC13B5K1000243 #402 RECEIVING",
        "Last Seen": "10/6/2021 9:47:45 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/bcaded0d-26f1-4033-b877-297e973b27c4\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051262644",
        Label: "5FCBC13B0K1000277 #553 GROUNDS",
        "Last Seen": "10/6/2021 1:09:42 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/58f4e546-0e6d-488b-b0ab-06ef3a58fe2d\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050848641",
        Label: "5FCBC13B5K1000274 #555 GROUNDS",
        "Last Seen": "10/6/2021 12:08:34 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/ef65c5ad-473f-4f51-a0b0-6aa9548e3358\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050844103",
        Label: "5FCBC13BXK1000254 #501 MAINTENANCE",
        "Last Seen": "10/6/2021 10:46:33 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/523fbb8c-b93b-444f-8409-f9ac2f90f4b7\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051282915",
        Label: "5FCBC13B9K1000262 #579 OPS CUSTODIAL",
        "Last Seen": "10/6/2021 11:34:32 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/67195fe2-081c-4627-8bd0-dfdf54576ab8\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051058877",
        Label: "5FCAD13B5K1000137 #100 PRESIDENTS",
        "Last Seen": "7/1/2021 4:30:37 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/5109eb8e-58dd-45a1-aeb7-0f65eac0872c\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050846520",
        Label: "5FCBC13B2K1000250 #603 TELECOMMUNICATION",
        "Last Seen": "10/6/2021 12:42:08 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/16edcde1-8a1d-4b92-bee0-f69f9bb5a273\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050845175",
        Label: "5FCBE13C6K1000240 #101 FACILITIES/PLANNING",
        "Last Seen": "10/6/2021 1:08:33 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/18a0dbac-20d9-4356-a118-d673e6a5f885\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        "Last Seen": "10/6/2021 1:04:53 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/a598b153-090e-4d9d-a75d-acd38c086272\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051240418",
        Label: "5FCBC13B6K1000252 #601 MEDIA",
        "Last Seen": "10/6/2021 9:51:41 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/5464cfcc-defd-4169-93ee-368fc88f3425\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051283327",
        Label: "5FCBC13B6K1000249 #205 CAMPUS STORE",
        "Last Seen": "10/6/2021 9:50:11 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/b84e98f7-4f47-4f3b-8c62-1cdf604cd674\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051251209",
        Label: "B3LE4-5UT0412 # 550 GROUNDS/REFUSE",
        "Last Seen": "10/6/2021 1:09:59 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/637302d1-d48f-4ddd-b6d6-5c0f37029b6a\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050849326",
        Label: "5FCBC13B1K1000255 #582 OPS CUSTODIAL",
        "Last Seen": "10/6/2021 12:40:26 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/1f2ab9bb-fe37-459f-9602-06661f4f765e\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050851264",
        Label: "5FCBE13C6K1000237 #303 CAMPUS POLICE",
        "Last Seen": "10/6/2021 12:18:41 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/a8930827-70c0-4eea-8d2d-b2298a6b50ab\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051271819",
        Label: "5FCBC13B3K1000239 #563 SYST RECYCLING",
        "Last Seen": "10/6/2021 12:02:47 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/66635b57-ed82-4417-88b3-b1fef19262c5\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051261240",
        Label: "5FCBC13B7K1000261 # 587 OPS CUSTODIAL",
        "Last Seen": "10/6/2021 11:20:09 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/a4812a7b-a472-4f6f-afa8-ca6fa55c9c15\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051239188",
        Label: "5FCBC13B9K1000245 #103 KCRW",
        "Last Seen": "8/13/2021 6:00:02 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/bedc23b5-86e2-4fa2-a40a-82fcbdbfb098\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050953201",
        Label: "B3LE4-5UT0413 # 551 GROUNDS/REFUSE",
        "Last Seen": "10/6/2021 1:09:40 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/6945bf76-bd4d-42fc-b44f-dc5f9c32355c\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051272882",
        Label: "5FCBC13B4K1000251 #602 TELECOMMUNICATIONS",
        "Last Seen": "10/6/2021 9:34:35 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/6dee0f50-1028-450d-af44-1b0272c8582e\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050849904",
        Label: "5FCBC13B3K1000287 #503 MAINTENANCE",
        "Last Seen": "9/28/2019 3:48:12 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/0e4f07c9-4c75-47e4-b97b-486a2926387c\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050847205",
        Label: "5FCBC13B4K1000279 #560 GROUNDS",
        "Last Seen": "10/6/2021 1:08:30 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/4ca179d3-8e88-4d98-bce9-e4d071994b46\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051240608",
        Label: "5FCBC13B3K1000273 #554 GROUNDS",
        "Last Seen": "10/6/2021 10:12:02 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/b3700fbe-407a-422a-9ae4-1bae63e8a854\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050851256",
        Label: "5FCBC13B1K1000305 #302 CAMPUS POLICE",
        "Last Seen": "10/6/2021 11:03:38 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/e15b46fa-a46f-428e-a352-b25053a9e468\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050844632",
        Label: "5FCBC13B7K1000258 #586 OPS CUSTODIAL",
        "Last Seen": "10/6/2021 12:40:14 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/342a2e1d-d22b-4e03-a280-e1d948c73f4b\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050846777",
        Label: "5FCBC13B1K1000241 #202 AUXILIARY SVCS",
        "Last Seen": "10/6/2021 9:59:39 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/76304327-e32e-42cb-8a72-388210eb90df\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050518301",
        Label: "5FCBC13B3K1000306 #575 OPS CUSTODIAL LIFT GATE",
        "Last Seen": "10/6/2021 1:06:45 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/203abb74-7c35-4553-a308-118a41974304\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050848922",
        Label: "5FCBC13B6K1000302 #514 MAINTENANCE",
        "Last Seen": "10/6/2021 1:04:53 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/3c3162d3-2a52-49a3-bd3c-9c3fa5213dcd\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050348824",
        Label: "5FCBC13B6K1000266 #516 MAINTENANCE",
        "Last Seen": "10/6/2021 9:40:09 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/1f14dc03-d026-4134-b972-43aff48797ec\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050527419",
        Label: "5FCBC13BXK1000304 #301 CAMPUS POLICE",
        "Last Seen": "10/6/2021 10:08:08 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/c2ca2dcf-98af-4599-a86c-dbcd356a15c1\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050846363",
        Label: "5FCBC13B7K1000292 #507 MAINTENANCE",
        "Last Seen": "10/6/2021 9:48:23 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/0f557a82-9fcf-4daf-a42b-418976ca7b71\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050555220",
        Label: "5FCBC13B8K1000303 #515 MAINTENANCE",
        "Last Seen": "10/6/2021 12:53:14 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/ccd40bed-32b8-4503-920d-ee2f71858b17\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050363849",
        Label: "5FCBC13B2K1000300 #512 MAINTENANCE",
        "Last Seen": "10/6/2021 1:02:41 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/6a161b50-6fb1-4b6a-b66d-e8afcb6a19d8\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050521065",
        Label: "5FCBC13B7K1000289 #506 MAINTENANCE",
        "Last Seen": "10/6/2021 11:41:11 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/453b65e0-b427-46b0-971c-5dc7b25f101e\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050852098",
        Label: "5FCBC13B8K1000284 #505 MAINTENANCE",
        "Last Seen": "10/6/2021 1:08:16 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/5bdc1827-3f5b-4d47-9d45-520568c44e63\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050358385",
        Label: "5FCBC13BXK1000268 #520 MAINTENANCE",
        "Last Seen": "10/6/2021 12:57:46 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/50c567a2-6831-40de-bb6f-ee236397fc92\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050846710",
        Label: "5FCBC13B3K1000290 #509 MAINTENANCE",
        "Last Seen": "10/6/2021 10:17:35 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/e5ad5fa8-4bc3-4e41-adba-f2fa374b9daf\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050558638",
        Label: "285",
        "Last Seen": "10/6/2021 10:32:38 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/e7a8616b-f7c1-4a52-9631-05fc982785fb\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050552367",
        Label: "5FCBC13B4K1000296 #552 GROUNDS",
        "Last Seen": "2/24/2021 12:10:46 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/10029f94-2f26-48e9-92f0-223c3bfb4ab0\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050522592",
        Label: "5FCBC13B5K1000288 #511 MAINTENANCE",
        "Last Seen": "10/6/2021 11:18:38 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/f9223362-0e7f-448a-b2b2-2575ce941a69\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050844863",
        Label: "B3LE4-5UT0417  #104 ADA WHEELCHAIR",
        "Last Seen": "5/23/2019 1:17:30 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/028c3dc6-e3db-49e4-9c60-3eca715c21b3\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051251225",
        Label: "5FCBC13B4K1000301 #513 MAINTENANCE",
        "Last Seen": "10/6/2021 12:21:05 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/e09504b2-1ed8-4061-ac9e-4c90bb66d059\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050992191",
        Label: "5FCBC13B8K1000267 #517 MAINTENANCE",
        "Last Seen": "10/6/2021 10:26:04 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/0db37373-af04-43b2-be89-4098fb9a91cb\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050555139",
        Label: "5FCAF13C9K1000113 #203 AUXILIARY SVCS",
        "Last Seen": "2/16/2021 5:05:05 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/706ce7de-e98d-4d6c-a65b-cd0aae81335f\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051261307",
        Label: "5FCBC13B8K1000270 #518 MAINTENANCE",
        "Last Seen": "10/6/2021 9:54:04 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/a3808b8f-1bd2-43f9-837d-4e26caaafadf\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051262305",
        Label: "5FCBC13B1K1000269 #519 MAINTENANCE",
        "Last Seen": "10/6/2021 12:52:39 PM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/0262e4fa-6aae-4a8b-bb3e-881f3be8c0b7\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050357031",
        Label: "5FCBC13B5K1000291 #508 MAINTENANCE",
        "Last Seen": "10/6/2021 9:28:27 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/924c5d42-82e1-47d6-b62c-59ca7ba30657\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
    ],
    list: "DeviceList",
    defaultSortColumn: 2,
  },
  DeviceMap: {
    title: "Vehicle Map",
    headings: ["IMEI", "Label", "View Vehicle"],
    data: [
      {
        IMEI: "355857050846447",
        Label: "5FCBC13B7K1000244 #403 MAILROOM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/b6c4e2e8-9b0a-46e1-9569-d95d27269849\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050852486",
        Label: "5FCBC13B6K1000283 #502 MAINTENANCE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/c13082e6-ff76-4997-987e-379784383eb8\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051271405",
        Label: "5FCBC13B5K1000260 #578 OPS CUSTODIAL",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/b46c0b19-4dc7-4ad7-9d21-52eba685e396\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051283277",
        Label: "5FCBC13B4K1000248 #204 CAMPUS STORE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/f5946676-d6fd-4b5a-b87c-4da5f58d6b44\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051262297",
        Label: "5FCBC13B9K1000259 #586 OPS CUSTODIAL",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/068bf13d-9bec-4750-9214-a0ea2e0ede9b\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050849680",
        Label: "5FCBC13B9K1000276 #558 MAINTENANCE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/2bc8874d-95ad-4b3e-9aab-823143cd02c9\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051282758",
        Label: "5FCBC13B4K1000265 #401 RECEIVING",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/d505ce09-c739-42e5-b768-81ecd232b38b\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051260853",
        Label: "5FCBC13B5K1000257 #583 OPS CUSTODIAL",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/68dfd47c-ef15-4e00-98f1-edaf55761d42\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051260978",
        Label: "5FCBC13BXK1000285 #504 MAINTENANCE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/f580bd59-5ed4-4eff-8ddd-3de3aae5ec98\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050838253",
        Label: "5FCBC13B7K1000275 #556 GROUNDS",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/3212bc30-0152-47bd-a0e3-c5554d9e09a9\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050849920",
        Label: "5FCBE13C4K1000236 #304 CAMPUS POLICE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/a5361a0e-e9f1-45df-8b32-33db390ce2d4\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051048910",
        Label: "5FCBC13B6K1000235 # 305 AMBULANCE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/e577f389-3711-4c76-a1f1-3f3926f1d11d\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050852569",
        Label: "5FCBC13B2K1000264 #577 OPS CUSTODIAL",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/7c234e54-5d5b-43a3-8594-9a6a42a207af\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050924848",
        Label: "5FCBC13B1K1000238 #562 SUST RECYCLING",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/1c602cf8-b17f-4d3e-9767-0de55d44e5f8\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051282766",
        Label: "5FCBC13B2K1000247 #201 REPROGRAPHIC",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/8a44ca5e-e9b7-4d99-9bd3-abc367fc61c8\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051066755",
        Label: "5FCBC13B3K1000256 #576-0256 custodial",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/77f118dd-c7a9-4dc3-9653-ac691a215212\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050845886",
        Label: "5FCBC13B0K1000263 #590 OPS CUSTODIAL",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/a73c755b-5883-41dc-9eb0-7c267cf5ee04\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050851611",
        Label: "5FCBC13B3K1000242 #206 TRANSPORTATION",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/7e7b8ef2-9098-4fc6-91b6-07ed42de0e9d\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050847403",
        Label: "5FCBC13B0K1000280 #561 GROUNDS",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/42d3eb2c-b4bb-46df-8f67-a8ea7974a81c\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051262198",
        Label: "5FCBC13B0K1000246 #102 EVENTS",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/4097238b-ebbd-4a3b-96de-3b912292420d\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050946007",
        Label: "5FCBC13B5K1000243 #402 RECEIVING",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/bcaded0d-26f1-4033-b877-297e973b27c4\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051262644",
        Label: "5FCBC13B0K1000277 #553 GROUNDS",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/58f4e546-0e6d-488b-b0ab-06ef3a58fe2d\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050848641",
        Label: "5FCBC13B5K1000274 #555 GROUNDS",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/ef65c5ad-473f-4f51-a0b0-6aa9548e3358\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050844103",
        Label: "5FCBC13BXK1000254 #501 MAINTENANCE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/523fbb8c-b93b-444f-8409-f9ac2f90f4b7\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051282915",
        Label: "5FCBC13B9K1000262 #579 OPS CUSTODIAL",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/67195fe2-081c-4627-8bd0-dfdf54576ab8\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051058877",
        Label: "5FCAD13B5K1000137 #100 PRESIDENTS",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/5109eb8e-58dd-45a1-aeb7-0f65eac0872c\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050846520",
        Label: "5FCBC13B2K1000250 #603 TELECOMMUNICATION",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/16edcde1-8a1d-4b92-bee0-f69f9bb5a273\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050845175",
        Label: "5FCBE13C6K1000240 #101 FACILITIES/PLANNING",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/18a0dbac-20d9-4356-a118-d673e6a5f885\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/a598b153-090e-4d9d-a75d-acd38c086272\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051240418",
        Label: "5FCBC13B6K1000252 #601 MEDIA",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/5464cfcc-defd-4169-93ee-368fc88f3425\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051283327",
        Label: "5FCBC13B6K1000249 #205 CAMPUS STORE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/b84e98f7-4f47-4f3b-8c62-1cdf604cd674\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051251209",
        Label: "B3LE4-5UT0412 # 550 GROUNDS/REFUSE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/637302d1-d48f-4ddd-b6d6-5c0f37029b6a\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050849326",
        Label: "5FCBC13B1K1000255 #582 OPS CUSTODIAL",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/1f2ab9bb-fe37-459f-9602-06661f4f765e\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050851264",
        Label: "5FCBE13C6K1000237 #303 CAMPUS POLICE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/a8930827-70c0-4eea-8d2d-b2298a6b50ab\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051271819",
        Label: "5FCBC13B3K1000239 #563 SYST RECYCLING",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/66635b57-ed82-4417-88b3-b1fef19262c5\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051261240",
        Label: "5FCBC13B7K1000261 # 587 OPS CUSTODIAL",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/a4812a7b-a472-4f6f-afa8-ca6fa55c9c15\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051239188",
        Label: "5FCBC13B9K1000245 #103 KCRW",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/bedc23b5-86e2-4fa2-a40a-82fcbdbfb098\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050953201",
        Label: "B3LE4-5UT0413 # 551 GROUNDS/REFUSE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/6945bf76-bd4d-42fc-b44f-dc5f9c32355c\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051272882",
        Label: "5FCBC13B4K1000251 #602 TELECOMMUNICATIONS",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/6dee0f50-1028-450d-af44-1b0272c8582e\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050849904",
        Label: "5FCBC13B3K1000287 #503 MAINTENANCE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/0e4f07c9-4c75-47e4-b97b-486a2926387c\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050847205",
        Label: "5FCBC13B4K1000279 #560 GROUNDS",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/4ca179d3-8e88-4d98-bce9-e4d071994b46\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051240608",
        Label: "5FCBC13B3K1000273 #554 GROUNDS",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/b3700fbe-407a-422a-9ae4-1bae63e8a854\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050851256",
        Label: "5FCBC13B1K1000305 #302 CAMPUS POLICE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/e15b46fa-a46f-428e-a352-b25053a9e468\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050844632",
        Label: "5FCBC13B7K1000258 #586 OPS CUSTODIAL",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/342a2e1d-d22b-4e03-a280-e1d948c73f4b\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050846777",
        Label: "5FCBC13B1K1000241 #202 AUXILIARY SVCS",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/76304327-e32e-42cb-8a72-388210eb90df\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050518301",
        Label: "5FCBC13B3K1000306 #575 OPS CUSTODIAL LIFT GATE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/203abb74-7c35-4553-a308-118a41974304\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050848922",
        Label: "5FCBC13B6K1000302 #514 MAINTENANCE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/3c3162d3-2a52-49a3-bd3c-9c3fa5213dcd\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050348824",
        Label: "5FCBC13B6K1000266 #516 MAINTENANCE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/1f14dc03-d026-4134-b972-43aff48797ec\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050527419",
        Label: "5FCBC13BXK1000304 #301 CAMPUS POLICE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/c2ca2dcf-98af-4599-a86c-dbcd356a15c1\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050846363",
        Label: "5FCBC13B7K1000292 #507 MAINTENANCE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/0f557a82-9fcf-4daf-a42b-418976ca7b71\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050555220",
        Label: "5FCBC13B8K1000303 #515 MAINTENANCE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/ccd40bed-32b8-4503-920d-ee2f71858b17\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050363849",
        Label: "5FCBC13B2K1000300 #512 MAINTENANCE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/6a161b50-6fb1-4b6a-b66d-e8afcb6a19d8\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050521065",
        Label: "5FCBC13B7K1000289 #506 MAINTENANCE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/453b65e0-b427-46b0-971c-5dc7b25f101e\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050852098",
        Label: "5FCBC13B8K1000284 #505 MAINTENANCE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/5bdc1827-3f5b-4d47-9d45-520568c44e63\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050358385",
        Label: "5FCBC13BXK1000268 #520 MAINTENANCE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/50c567a2-6831-40de-bb6f-ee236397fc92\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050846710",
        Label: "5FCBC13B3K1000290 #509 MAINTENANCE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/e5ad5fa8-4bc3-4e41-adba-f2fa374b9daf\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050558638",
        Label: "285",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/e7a8616b-f7c1-4a52-9631-05fc982785fb\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050552367",
        Label: "5FCBC13B4K1000296 #552 GROUNDS",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/10029f94-2f26-48e9-92f0-223c3bfb4ab0\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050522592",
        Label: "5FCBC13B5K1000288 #511 MAINTENANCE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/f9223362-0e7f-448a-b2b2-2575ce941a69\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050844863",
        Label: "B3LE4-5UT0417  #104 ADA WHEELCHAIR",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/028c3dc6-e3db-49e4-9c60-3eca715c21b3\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051251225",
        Label: "5FCBC13B4K1000301 #513 MAINTENANCE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/e09504b2-1ed8-4061-ac9e-4c90bb66d059\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050992191",
        Label: "5FCBC13B8K1000267 #517 MAINTENANCE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/0db37373-af04-43b2-be89-4098fb9a91cb\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050555139",
        Label: "5FCAF13C9K1000113 #203 AUXILIARY SVCS",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/706ce7de-e98d-4d6c-a65b-cd0aae81335f\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051261307",
        Label: "5FCBC13B8K1000270 #518 MAINTENANCE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/a3808b8f-1bd2-43f9-837d-4e26caaafadf\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051262305",
        Label: "5FCBC13B1K1000269 #519 MAINTENANCE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/0262e4fa-6aae-4a8b-bb3e-881f3be8c0b7\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050357031",
        Label: "5FCBC13B5K1000291 #508 MAINTENANCE",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/924c5d42-82e1-47d6-b62c-59ca7ba30657\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
    ],
    list: "DeviceMap",
    locations: [
      { lat: 34.0153, lng: -118.4722 },
      { lat: 34.01819, lng: -118.4698 },
      { lat: 34.01704, lng: -118.4718 },
      { lat: 34.0168, lng: -118.4774 },
      { lat: 34.01734, lng: -118.4704 },
      { lat: 34.0178, lng: -118.472 },
      { lat: 34.01525, lng: -118.4722 },
      { lat: 34.01545, lng: -118.4727 },
      { lat: 34.01472, lng: -118.4715 },
      { lat: 34.0173, lng: -118.472 },
      { lat: 34.01527, lng: -118.4689 },
      { lat: 34.01857, lng: -118.4705 },
      { lat: 34.0176, lng: -118.4691 },
      { lat: 34.01589, lng: -118.4682 },
      { lat: 34.01571, lng: -118.4701 },
      { lat: 34.01661, lng: -118.4714 },
      { lat: 34.01538, lng: -118.4441 },
      { lat: 34.01598, lng: -118.4696 },
      { lat: 34.01875, lng: -118.4699 },
      { lat: 34.01551, lng: -118.4686 },
      { lat: 34.01518, lng: -118.4721 },
      { lat: 34.02357, lng: -118.4614 },
      { lat: 34.01753, lng: -118.4723 },
      { lat: 34.01513, lng: -118.4718 },
      { lat: 34.01762, lng: -118.4721 },
      { lat: 34.02364, lng: -118.4615 },
      { lat: 34.01561, lng: -118.4701 },
      { lat: 34.0158, lng: -118.4727 },
      { lat: 34.01727, lng: -118.4727 },
      { lat: 34.01534, lng: -118.4704 },
      { lat: 34.01805, lng: -118.469 },
      { lat: 34.01615, lng: -118.4708 },
      { lat: 34.01475, lng: -118.4717 },
      { lat: 34.01651, lng: -118.472 },
      { lat: 34.01596, lng: -118.4682 },
      { lat: 34.01698, lng: -118.4715 },
      { lat: 34.01559, lng: -118.4725 },
      { lat: 34.01513, lng: -118.4702 },
      { lat: 34.15417, lng: -118.5232 },
      { lat: 34.01479, lng: -118.4716 },
      { lat: 34.01734, lng: -118.471 },
      { lat: 34.01786, lng: -118.4722 },
      { lat: 34.01515, lng: -118.469 },
      { lat: 34.01753, lng: -118.4719 },
      { lat: 34.01562, lng: -118.4684 },
      { lat: 34.0174, lng: -118.4694 },
      { lat: 34.01569, lng: -118.4707 },
      { lat: 34.01519, lng: -118.472 },
      { lat: 34.01631, lng: -118.4699 },
      { lat: 34.01571, lng: -118.4726 },
      { lat: 34.01506, lng: -118.4719 },
      { lat: 34.01656, lng: -118.4725 },
      { lat: 34.01469, lng: -118.4716 },
      { lat: 34.01616, lng: -118.4713 },
      { lat: 34.0151, lng: -118.4722 },
      { lat: 34.01637, lng: -118.4717 },
      { lat: 34.01581, lng: -118.4727 },
      { lat: 34.01469, lng: -118.4717 },
      { lat: 34.01517, lng: -118.4719 },
      { lat: 43.53576, lng: -89.99287 },
      { lat: 34.01508, lng: -118.472 },
      { lat: 34.01516, lng: -118.472 },
      { lat: 34.0156, lng: -118.4723 },
      { lat: 34.01585, lng: -118.4706 },
      { lat: 34.01767, lng: -118.4721 },
      { lat: 34.0149, lng: -118.4718 },
    ],
  },
  OfflineVehicles: {
    title: "Offline Vehicles",
    headings: ["IMEI", "Label", "Hours Missing", "View Vehicle"],
    data: [],
    list: "OfflineVehicles",
    defaultSortColumn: 2,
  },
  BadBatteries: {
    title: "Bad Batteries",
    headings: ["IMEI", "Label", "Since", "View Vehicle"],
    data: [
      {
        IMEI: "355857050844632",
        Label: "5FCBC13B7K1000258 #586 OPS CUSTODIAL",
        Since: "2/13/2021 1:13:16 AM",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/342A2E1D-D22B-4E03-A280-E1D948C73F4B#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
    ],
    list: "BadBatteries",
    defaultSortColumn: 2,
  },
  VehiclesNotCharged: {
    title: "Not Charged",
    headings: [
      "IMEI",
      "Label",
      "Last Charge",
      "Hours Since Charge",
      "View Vehicle",
    ],
    data: [
      {
        IMEI: "355857050558638",
        Label: "285",
        "Last Charge": "9/29/2021 9:05:41 PM",
        "Hours Since Charge": "160",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/E7A8616B-F7C1-4A52-9631-05FC982785FB#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051262644",
        Label: "5FCBC13B0K1000277 #553 GROUNDS",
        "Last Charge": "10/5/2021 7:38:53 PM",
        "Hours Since Charge": "18",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/58F4E546-0E6D-488B-B0AB-06EF3A58FE2D#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050851611",
        Label: "5FCBC13B3K1000242 #206 TRANSPORTATION",
        "Last Charge": "9/29/2021 9:05:13 PM",
        "Hours Since Charge": "160",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/7E7B8EF2-9098-4FC6-91B6-07ED42DE0E9D#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050924848",
        Label: "5FCBC13B1K1000238 #562 SUST RECYCLING",
        "Last Charge": "9/29/2021 9:04:47 PM",
        "Hours Since Charge": "160",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/1C602CF8-B17F-4D3E-9767-0DE55D44E5F8#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051058877",
        Label: "5FCAD13B5K1000137 #100 PRESIDENTS",
        "Last Charge": "6/30/2021 11:08:12 PM",
        "Hours Since Charge": "2342",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/5109EB8E-58DD-45A1-AEB7-0F65EAC0872C#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050518301",
        Label: "5FCBC13B3K1000306 #575 OPS CUSTODIAL LIFT GATE",
        "Last Charge": "10/5/2021 5:19:18 PM",
        "Hours Since Charge": "20",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/203ABB74-7C35-4553-A308-118A41974304#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051272882",
        Label: "5FCBC13B4K1000251 #602 TELECOMMUNICATIONS",
        "Last Charge": "9/29/2021 9:04:56 PM",
        "Hours Since Charge": "160",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/6DEE0F50-1028-450D-AF44-1B0272C8582E#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051240608",
        Label: "5FCBC13B3K1000273 #554 GROUNDS",
        "Last Charge": "9/30/2021 10:29:37 PM",
        "Hours Since Charge": "135",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/B3700FBE-407A-422A-9AE4-1BAE63E8A854#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050852486",
        Label: "5FCBC13B6K1000283 #502 MAINTENANCE",
        "Last Charge": "9/29/2021 9:05:39 PM",
        "Hours Since Charge": "160",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/C13082E6-FF76-4997-987E-379784383EB8#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051271405",
        Label: "5FCBC13B5K1000260 #578 OPS CUSTODIAL",
        "Last Charge": "9/29/2021 9:05:44 PM",
        "Hours Since Charge": "160",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/B46C0B19-4DC7-4AD7-9D21-52EBA685E396#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050848641",
        Label: "5FCBC13B5K1000274 #555 GROUNDS",
        "Last Charge": "10/4/2021 9:09:41 PM",
        "Hours Since Charge": "40",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/EF65C5AD-473F-4F51-A0B0-6AA9548E3358#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050849680",
        Label: "5FCBC13B9K1000276 #558 MAINTENANCE",
        "Last Charge": "9/30/2021 5:12:00 AM",
        "Hours Since Charge": "152",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/2BC8874D-95AD-4B3E-9AAB-823143CD02C9#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051239188",
        Label: "5FCBC13B9K1000245 #103 KCRW",
        "Last Charge": "8/12/2021 9:05:36 PM",
        "Hours Since Charge": "1312",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/BEDC23B5-86E2-4FA2-A40A-82FCBDBFB098#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050852569",
        Label: "5FCBC13B2K1000264 #577 OPS CUSTODIAL",
        "Last Charge": "10/1/2021 11:15:48 PM",
        "Hours Since Charge": "110",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/7C234E54-5D5B-43A3-8594-9A6A42A207AF#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051262297",
        Label: "5FCBC13B9K1000259 #586 OPS CUSTODIAL",
        "Last Charge": "10/5/2021 9:02:07 PM",
        "Hours Since Charge": "16",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/068BF13D-9BEC-4750-9214-A0EA2E0EDE9B#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050847403",
        Label: "5FCBC13B0K1000280 #561 GROUNDS",
        "Last Charge": "10/5/2021 4:36:32 PM",
        "Hours Since Charge": "21",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/42D3EB2C-B4BB-46DF-8F67-A8EA7974A81C#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051282766",
        Label: "5FCBC13B2K1000247 #201 REPROGRAPHIC",
        "Last Charge": "10/5/2021 7:47:16 PM",
        "Hours Since Charge": "18",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/8A44CA5E-E9B7-4D99-9BD3-ABC367FC61C8#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051066755",
        Label: "5FCBC13B3K1000256 #576-0256 custodial",
        "Last Charge": "10/4/2021 9:09:08 PM",
        "Hours Since Charge": "40",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/77F118DD-C7A9-4DC3-9653-AC691A215212#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        "Last Charge": "10/5/2021 11:59:54 AM",
        "Hours Since Charge": "25",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/A598B153-090E-4D9D-A75D-ACD38C086272#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051271819",
        Label: "5FCBC13B3K1000239 #563 SYST RECYCLING",
        "Last Charge": "10/5/2021 7:28:49 PM",
        "Hours Since Charge": "18",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/66635B57-ED82-4417-88B3-B1FEF19262C5#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050851264",
        Label: "5FCBE13C6K1000237 #303 CAMPUS POLICE",
        "Last Charge": "10/4/2021 10:16:48 PM",
        "Hours Since Charge": "39",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/A8930827-70C0-4EEA-8D2D-B2298A6B50AB#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050838253",
        Label: "5FCBC13B7K1000275 #556 GROUNDS",
        "Last Charge": "10/5/2021 9:05:43 PM",
        "Hours Since Charge": "16",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/3212BC30-0152-47BD-A0E3-C5554D9E09A9#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051261240",
        Label: "5FCBC13B7K1000261 # 587 OPS CUSTODIAL",
        "Last Charge": "10/5/2021 9:08:11 PM",
        "Hours Since Charge": "16",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/A4812A7B-A472-4F6F-AFA8-CA6FA55C9C15#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050844632",
        Label: "5FCBC13B7K1000258 #586 OPS CUSTODIAL",
        "Last Charge": "9/29/2021 9:04:51 PM",
        "Hours Since Charge": "160",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/342A2E1D-D22B-4E03-A280-E1D948C73F4B#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051260853",
        Label: "5FCBC13B5K1000257 #583 OPS CUSTODIAL",
        "Last Charge": "10/5/2021 1:11:10 PM",
        "Hours Since Charge": "24",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/68DFD47C-EF15-4E00-98F1-EDAF55761D42#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050846520",
        Label: "5FCBC13B2K1000250 #603 TELECOMMUNICATION",
        "Last Charge": "10/1/2021 3:30:39 PM",
        "Hours Since Charge": "118",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/16EDCDE1-8A1D-4B92-BEE0-F69F9BB5A273#vehicleBattery\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
    ],
    list: "VehiclesNotCharged",
    defaultSortColumn: 2,
  },
  VehicleImpactExtreme: {
    title: "Extreme Impacts",
    headings: ["IMEI", "Label", "Date", "G-horiz", "G-verti", "View Impact"],
    data: [
      {
        IMEI: "355857051283277",
        Label: "5FCBC13B4K1000248 #204 CAMPUS STORE",
        Date: "9/30/2021 6:18:08 PM",
        "G-horiz": "7.1",
        "G-verti": "2.1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/Incident/detail/C0B690F0-A3F8-4BAA-B681-B9E9D36996DF\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857051283277",
        Label: "5FCBC13B4K1000248 #204 CAMPUS STORE",
        Date: "9/30/2021 6:18:44 PM",
        "G-horiz": "7.1",
        "G-verti": "2.1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/Incident/detail/25FAE702-7114-4BAF-B2CF-7C2526D668B0\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050555220",
        Label: "5FCBC13B8K1000303 #515 MAINTENANCE",
        Date: "10/1/2021 4:58:47 PM",
        "G-horiz": "7.2",
        "G-verti": "1.4",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/Incident/detail/5BDA93E2-38D0-4801-80A9-A211BC4E5323\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050363849",
        Label: "5FCBC13B2K1000300 #512 MAINTENANCE",
        Date: "9/30/2021 3:29:46 PM",
        "G-horiz": "7",
        "G-verti": "0.9",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/Incident/detail/33DAB888-14B1-47C2-B8E0-02EF7E152F8C\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050363849",
        Label: "5FCBC13B2K1000300 #512 MAINTENANCE",
        Date: "9/30/2021 3:30:21 PM",
        "G-horiz": "7",
        "G-verti": "0.9",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/Incident/detail/2B4AE0BF-6A0E-4549-84B3-FAD425F5A752\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050846710",
        Label: "5FCBC13B3K1000290 #509 MAINTENANCE",
        Date: "10/5/2021 2:29:48 AM",
        "G-horiz": "7.3",
        "G-verti": "3.1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/Incident/detail/384ADC9E-D339-4579-8872-FFCBD672E192\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
    ],
    list: "VehicleImpactExtreme",
    defaultSortColumn: 3,
  },
  VehicleImpactAbnormal: {
    title: "Abnormal Impacts",
    headings: ["IMEI", "Label", "Date", "G-horiz", "G-verti", "View Impact"],
    data: [
      {
        IMEI: "355857051283277",
        Label: "5FCBC13B4K1000248 #204 CAMPUS STORE",
        Date: "9/29/2021 8:57:27 PM",
        "G-horiz": "5.8",
        "G-verti": "2.5",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/2F1CE074-E429-4F9A-9B1C-394E26CD6034\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857051283277",
        Label: "5FCBC13B4K1000248 #204 CAMPUS STORE",
        Date: "9/30/2021 5:11:18 PM",
        "G-horiz": "5.1",
        "G-verti": "0.6",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/3586461D-4E8C-466B-882D-C346D1F4D922\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857051283277",
        Label: "5FCBC13B4K1000248 #204 CAMPUS STORE",
        Date: "10/5/2021 5:57:18 PM",
        "G-horiz": "5.8",
        "G-verti": "1.6",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/684095C0-2506-4D59-92F5-E7F215BD659A\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050849680",
        Label: "5FCBC13B9K1000276 #558 MAINTENANCE",
        Date: "10/1/2021 7:09:07 AM",
        "G-horiz": "5.3",
        "G-verti": "1.7",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/77EF41EA-82B5-4A06-BDC4-FF38DD695893\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050849680",
        Label: "5FCBC13B9K1000276 #558 MAINTENANCE",
        Date: "10/1/2021 7:12:28 AM",
        "G-horiz": "5.5",
        "G-verti": "1.7",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/FF453BA4-13E5-4548-B228-D5E7C2CDFCB2\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050849680",
        Label: "5FCBC13B9K1000276 #558 MAINTENANCE",
        Date: "10/1/2021 7:13:20 AM",
        "G-horiz": "5.5",
        "G-verti": "1.7",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/7A5BDFBF-E7BE-485C-91B8-2C0CE5BAE454\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857051282758",
        Label: "5FCBC13B4K1000265 #401 RECEIVING",
        Date: "9/29/2021 5:18:18 PM",
        "G-horiz": "5.4",
        "G-verti": "2.4",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/87275D9A-D9D5-49C1-97DE-0C7CEFAC2F21\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857051282758",
        Label: "5FCBC13B4K1000265 #401 RECEIVING",
        Date: "9/29/2021 5:20:23 PM",
        "G-horiz": "5.4",
        "G-verti": "2.4",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/1AD65D03-00D6-4E41-AE5C-C6B79D74B8C6\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857051282758",
        Label: "5FCBC13B4K1000265 #401 RECEIVING",
        Date: "9/29/2021 5:28:49 PM",
        "G-horiz": "6.4",
        "G-verti": "2.3",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/ECFA8508-1330-42F3-B3E1-3F9A2F05F99A\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857051282758",
        Label: "5FCBC13B4K1000265 #401 RECEIVING",
        Date: "9/29/2021 5:29:11 PM",
        "G-horiz": "6.4",
        "G-verti": "2.3",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/09AC0682-ABC9-4C52-9272-697FA3F4F4AD\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857051282758",
        Label: "5FCBC13B4K1000265 #401 RECEIVING",
        Date: "9/29/2021 5:35:25 PM",
        "G-horiz": "6.9",
        "G-verti": "3.3",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/C622E5C4-A972-4A4A-80F2-95BB4CB070E8\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857051282758",
        Label: "5FCBC13B4K1000265 #401 RECEIVING",
        Date: "9/30/2021 9:10:13 PM",
        "G-horiz": "5.1",
        "G-verti": "1.1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/1D48C2A5-4A58-4A47-B6B9-ECCBE962CDD4\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857051260853",
        Label: "5FCBC13B5K1000257 #583 OPS CUSTODIAL",
        Date: "10/5/2021 2:27:10 PM",
        "G-horiz": "6",
        "G-verti": "1.1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/9E56A95D-79B1-4ECC-986D-E7E2953D7031\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857051260978",
        Label: "5FCBC13BXK1000285 #504 MAINTENANCE",
        Date: "9/29/2021 7:26:42 PM",
        "G-horiz": "5.5",
        "G-verti": "1.5",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/BC189072-AE61-40D5-BB44-49A69FF079F0\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857051260978",
        Label: "5FCBC13BXK1000285 #504 MAINTENANCE",
        Date: "10/5/2021 7:09:43 PM",
        "G-horiz": "5.1",
        "G-verti": "1.1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/B9ADAE6A-7334-43A2-82A2-72FAC87A1BE7\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050838253",
        Label: "5FCBC13B7K1000275 #556 GROUNDS",
        Date: "9/30/2021 12:57:19 AM",
        "G-horiz": "6.8",
        "G-verti": "1.1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/B6180571-5327-4640-91A7-E2E8FCBBCAB0\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050838253",
        Label: "5FCBC13B7K1000275 #556 GROUNDS",
        Date: "10/5/2021 2:42:17 AM",
        "G-horiz": "5.7",
        "G-verti": "1.1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/1512A9F2-13C1-4C83-97C4-54CEFADFD2A1\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050845886",
        Label: "5FCBC13B0K1000263 #590 OPS CUSTODIAL",
        Date: "9/30/2021 5:58:02 PM",
        "G-horiz": "6.2",
        "G-verti": "1.2",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/E0826887-FEE9-4689-AEC9-4B3184E48887\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847403",
        Label: "5FCBC13B0K1000280 #561 GROUNDS",
        Date: "10/1/2021 6:59:22 PM",
        "G-horiz": "5.6",
        "G-verti": "1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/BECEA7CF-1A5D-49E6-B31B-2FE6E82FC584\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847403",
        Label: "5FCBC13B0K1000280 #561 GROUNDS",
        Date: "10/5/2021 11:56:53 AM",
        "G-horiz": "6.4",
        "G-verti": "0.7",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/E162E946-5393-4931-A776-D0DF76008328\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847403",
        Label: "5FCBC13B0K1000280 #561 GROUNDS",
        Date: "10/5/2021 11:57:55 AM",
        "G-horiz": "6.4",
        "G-verti": "2",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/F7668CBE-5E46-4BC6-B7C1-43F93C88C3A3\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847403",
        Label: "5FCBC13B0K1000280 #561 GROUNDS",
        Date: "10/5/2021 6:08:29 PM",
        "G-horiz": "5.6",
        "G-verti": "1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/4B527AA0-08FB-4C75-BCDD-215A6F8685DE\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050946007",
        Label: "5FCBC13B5K1000243 #402 RECEIVING",
        Date: "9/29/2021 8:27:10 PM",
        "G-horiz": "5.7",
        "G-verti": "2.8",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/0CED5DFB-8A58-4C4B-9FB2-7F2D6B1C20C5\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050946007",
        Label: "5FCBC13B5K1000243 #402 RECEIVING",
        Date: "9/29/2021 8:27:57 PM",
        "G-horiz": "5.7",
        "G-verti": "2.8",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/8455ED0C-D614-4B32-AE53-115F0F838997\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050946007",
        Label: "5FCBC13B5K1000243 #402 RECEIVING",
        Date: "10/4/2021 3:58:37 PM",
        "G-horiz": "5.1",
        "G-verti": "0.5",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/ED65B799-BF22-4F1B-9B65-BC6944E1F0EA\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857051262644",
        Label: "5FCBC13B0K1000277 #553 GROUNDS",
        Date: "10/4/2021 7:08:52 PM",
        "G-horiz": "6.3",
        "G-verti": "1.3",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/FB4BF8A3-AD1D-47E1-BDE1-CF1CBAAB9D67\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857051262644",
        Label: "5FCBC13B0K1000277 #553 GROUNDS",
        Date: "10/4/2021 7:09:47 PM",
        "G-horiz": "6.3",
        "G-verti": "1.3",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/06CD9997-7949-4533-B89F-3A90AB3709F6\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857051262644",
        Label: "5FCBC13B0K1000277 #553 GROUNDS",
        Date: "10/4/2021 7:10:18 PM",
        "G-horiz": "6.3",
        "G-verti": "1.3",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/36414B06-667A-4AFC-81FC-293131CC3BFC\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857051262644",
        Label: "5FCBC13B0K1000277 #553 GROUNDS",
        Date: "10/5/2021 4:13:50 PM",
        "G-horiz": "6.2",
        "G-verti": "1.5",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/D5D9A3A3-A04C-4C64-98AC-B940C256A861\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050848641",
        Label: "5FCBC13B5K1000274 #555 GROUNDS",
        Date: "9/29/2021 5:14:51 PM",
        "G-horiz": "5.2",
        "G-verti": "2.5",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/63467B8F-6596-4CE0-85FB-910E4EBCBEBD\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050848641",
        Label: "5FCBC13B5K1000274 #555 GROUNDS",
        Date: "9/30/2021 9:03:41 PM",
        "G-horiz": "5.1",
        "G-verti": "0.5",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/06224E4B-E055-4013-BC46-B0F296492B5E\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050848641",
        Label: "5FCBC13B5K1000274 #555 GROUNDS",
        Date: "10/1/2021 1:41:42 PM",
        "G-horiz": "5.7",
        "G-verti": "1.1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/AC5C35F4-8BEE-41BC-8234-2420B2D936B8\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050846520",
        Label: "5FCBC13B2K1000250 #603 TELECOMMUNICATION",
        Date: "10/5/2021 5:08:26 PM",
        "G-horiz": "5.9",
        "G-verti": "2.2",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/8FBDFD4A-79F0-4DA5-A489-43A1744B3391\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "9/29/2021 1:56:53 PM",
        "G-horiz": "5.9",
        "G-verti": "1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/E4AB4B91-F2AB-4FB6-9642-8F9936F7720B\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "9/30/2021 1:09:22 PM",
        "G-horiz": "6",
        "G-verti": "1.1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/7F4623FC-72AD-48DF-8196-FADE2C05BED4\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "9/30/2021 5:22:04 PM",
        "G-horiz": "4.3",
        "G-verti": "5",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/A9BD0287-331D-4C2E-B9DA-17703FF6079A\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "9/30/2021 5:22:32 PM",
        "G-horiz": "4.3",
        "G-verti": "5",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/D20E42D1-865E-4382-A5F3-AF990357EF39\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "9/30/2021 5:33:27 PM",
        "G-horiz": "5.5",
        "G-verti": "0.3",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/A3FEC82D-1F03-434F-9EA0-5DE32C2D8659\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "10/1/2021 4:17:49 PM",
        "G-horiz": "5.5",
        "G-verti": "1.5",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/D1A097E3-C308-4B87-B783-4D8DE31DC19F\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "10/1/2021 7:00:58 PM",
        "G-horiz": "5.4",
        "G-verti": "0.9",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/8BAB60DA-B475-410F-A022-0010D7A54674\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "10/1/2021 7:01:59 PM",
        "G-horiz": "5.4",
        "G-verti": "0.9",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/B9F02F3D-4C9C-437A-B8F3-BE7350BFDDE3\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "10/1/2021 7:16:14 PM",
        "G-horiz": "5.3",
        "G-verti": "1.1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/95286830-AAB7-47E5-AEC0-1D82390332A5\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "10/1/2021 7:16:53 PM",
        "G-horiz": "5.3",
        "G-verti": "1.1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/D6E0A710-9306-4C65-B7BF-9DCA7F35118C\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "10/1/2021 7:23:21 PM",
        "G-horiz": "5",
        "G-verti": "0.8",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/11788B79-3A37-4B2A-8322-0B95F52F0260\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "10/1/2021 8:49:14 PM",
        "G-horiz": "5.5",
        "G-verti": "0.3",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/7EACD4ED-3CB7-4371-B968-5926B69A5EC9\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "10/4/2021 2:11:38 PM",
        "G-horiz": "6.2",
        "G-verti": "0.4",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/4BB16848-782C-40FD-AE7E-032B839DF0BA\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "10/4/2021 2:15:24 PM",
        "G-horiz": "6.2",
        "G-verti": "0.5",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/2CC45408-5385-4BB9-B508-CD0B3D41491F\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "10/4/2021 2:49:01 PM",
        "G-horiz": "5.5",
        "G-verti": "1.1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/92E6187F-E9DD-4177-B887-650B5BF38C12\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "10/4/2021 3:57:40 PM",
        "G-horiz": "5.1",
        "G-verti": "0.9",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/5414F20D-E16D-4994-ACB3-61499CF58A13\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "10/4/2021 4:27:06 PM",
        "G-horiz": "5.3",
        "G-verti": "1.7",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/A49B83C0-2FEA-4485-AB4D-5FB8E38F2BDE\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "10/4/2021 7:53:20 PM",
        "G-horiz": "5",
        "G-verti": "0.7",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/96F88395-FBA7-4B89-BD21-35438BCC1C61\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "10/4/2021 7:54:10 PM",
        "G-horiz": "5",
        "G-verti": "0.7",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/ADA771F4-7C82-4EEF-89B9-5F8FA0153250\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "10/4/2021 8:35:11 PM",
        "G-horiz": "5.4",
        "G-verti": "1.1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/E94A7922-E0F8-47EC-9DC4-FB6C8D2DE996\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "10/4/2021 8:36:16 PM",
        "G-horiz": "5.4",
        "G-verti": "1.1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/F4A36DBF-65B9-4182-A4E2-6FBAF3CB43B4\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "10/5/2021 2:27:30 PM",
        "G-horiz": "6.4",
        "G-verti": "1.1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/AB97885C-6999-4DE5-886E-9E9BF4BE4327\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "10/5/2021 2:28:14 PM",
        "G-horiz": "6.4",
        "G-verti": "1.1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/DBF18E22-8B5B-45E5-9865-9D82559E2806\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "10/5/2021 3:01:00 PM",
        "G-horiz": "5.6",
        "G-verti": "3.3",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/B7223778-EE89-48B8-BF0E-A13A7A386EDB\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "10/5/2021 4:13:22 PM",
        "G-horiz": "6",
        "G-verti": "0.4",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/F16AAA7C-D15E-42A8-AB92-71CF90277D6C\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "10/5/2021 6:59:19 PM",
        "G-horiz": "6.9",
        "G-verti": "1.1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/ED3A07BE-E788-4E82-A604-9D610434D661\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        Date: "10/5/2021 8:32:22 PM",
        "G-horiz": "6.3",
        "G-verti": "1.7",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/14981723-3BF5-4B19-8890-0DF5CFA0C33A\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857051283327",
        Label: "5FCBC13B6K1000249 #205 CAMPUS STORE",
        Date: "10/4/2021 2:57:54 PM",
        "G-horiz": "6",
        "G-verti": "3.5",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/4BE82C7F-7156-4096-BBEE-68F089065CA9\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857051283327",
        Label: "5FCBC13B6K1000249 #205 CAMPUS STORE",
        Date: "10/5/2021 7:28:25 PM",
        "G-horiz": "5.1",
        "G-verti": "0.8",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/445C213E-1117-4D6A-8042-868F69EC9F25\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050849326",
        Label: "5FCBC13B1K1000255 #582 OPS CUSTODIAL",
        Date: "9/29/2021 5:58:32 PM",
        "G-horiz": "5.4",
        "G-verti": "1.1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/A0523A24-37AA-447D-B124-B52BDCD7CBC3\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857051271819",
        Label: "5FCBC13B3K1000239 #563 SYST RECYCLING",
        Date: "10/5/2021 7:26:17 PM",
        "G-horiz": "5.3",
        "G-verti": "0.8",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/CB0704C7-5B32-4723-8270-91A39CD449C1\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847205",
        Label: "5FCBC13B4K1000279 #560 GROUNDS",
        Date: "10/2/2021 7:26:00 PM",
        "G-horiz": "5",
        "G-verti": "0.9",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/4A7E6C52-504B-480C-918C-82FAF0F9E0A3\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050847205",
        Label: "5FCBC13B4K1000279 #560 GROUNDS",
        Date: "10/5/2021 1:36:39 PM",
        "G-horiz": "6.1",
        "G-verti": "0.2",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/3922E2C3-EF9F-423B-B59D-D0B20928C079\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050846777",
        Label: "5FCBC13B1K1000241 #202 AUXILIARY SVCS",
        Date: "9/29/2021 5:29:49 PM",
        "G-horiz": "5.3",
        "G-verti": "1.4",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/9B390DDD-5C62-4F26-AECD-21D7C1D169CF\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050846777",
        Label: "5FCBC13B1K1000241 #202 AUXILIARY SVCS",
        Date: "9/29/2021 8:10:38 PM",
        "G-horiz": "4.1",
        "G-verti": "5.4",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/83C30204-7259-4129-86DF-EAD97AB19772\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050846777",
        Label: "5FCBC13B1K1000241 #202 AUXILIARY SVCS",
        Date: "9/29/2021 8:52:41 PM",
        "G-horiz": "6.6",
        "G-verti": "4.3",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/C3C26852-04DA-4266-8F0C-0E4850F2944D\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050846777",
        Label: "5FCBC13B1K1000241 #202 AUXILIARY SVCS",
        Date: "9/29/2021 8:53:49 PM",
        "G-horiz": "6.6",
        "G-verti": "4.3",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/59440E0B-7E8C-4FA7-AAE6-22923CD4CE79\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050518301",
        Label: "5FCBC13B3K1000306 #575 OPS CUSTODIAL LIFT GATE",
        Date: "9/29/2021 2:13:49 PM",
        "G-horiz": "5.3",
        "G-verti": "0.6",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/A39E23FD-5D6B-4F2E-902B-D0B5FBD5D819\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050518301",
        Label: "5FCBC13B3K1000306 #575 OPS CUSTODIAL LIFT GATE",
        Date: "10/4/2021 12:34:48 PM",
        "G-horiz": "5.1",
        "G-verti": "0.4",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/CCCB2672-FA2E-4092-B361-B19CDF1A2404\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050518301",
        Label: "5FCBC13B3K1000306 #575 OPS CUSTODIAL LIFT GATE",
        Date: "10/5/2021 5:21:04 PM",
        "G-horiz": "5",
        "G-verti": "1.3",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/1A62699C-1250-4A42-A9AB-10862687255D\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050518301",
        Label: "5FCBC13B3K1000306 #575 OPS CUSTODIAL LIFT GATE",
        Date: "10/5/2021 5:52:34 PM",
        "G-horiz": "5.1",
        "G-verti": "0.8",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/C8CC16D1-A318-4D12-8BD6-19316E66C475\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050348824",
        Label: "5FCBC13B6K1000266 #516 MAINTENANCE",
        Date: "10/5/2021 5:51:43 PM",
        "G-horiz": "3.9",
        "G-verti": "6.1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/6D260A58-F652-45ED-AE2F-F90BB7C27877\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050348824",
        Label: "5FCBC13B6K1000266 #516 MAINTENANCE",
        Date: "10/5/2021 5:53:14 PM",
        "G-horiz": "3.9",
        "G-verti": "6.1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/D62480D9-42FC-4E84-8D34-FFCF90752EF5\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050555220",
        Label: "5FCBC13B8K1000303 #515 MAINTENANCE",
        Date: "10/1/2021 3:47:13 PM",
        "G-horiz": "5",
        "G-verti": "0.6",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/BDD1AC97-DCE1-4C8D-8ACA-213D769F9BD0\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050555220",
        Label: "5FCBC13B8K1000303 #515 MAINTENANCE",
        Date: "10/1/2021 4:45:07 PM",
        "G-horiz": "5.1",
        "G-verti": "0.9",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/63010C05-F5F2-4ACE-AEBC-EDCF18737AC9\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050555220",
        Label: "5FCBC13B8K1000303 #515 MAINTENANCE",
        Date: "10/4/2021 5:27:51 PM",
        "G-horiz": "5.5",
        "G-verti": "0.5",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/F93E559B-7BC8-4459-BF53-97034FA1A7C5\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050555220",
        Label: "5FCBC13B8K1000303 #515 MAINTENANCE",
        Date: "10/4/2021 5:28:23 PM",
        "G-horiz": "5.5",
        "G-verti": "0.5",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/5A54D455-CFC4-4426-930B-62655474D8BA\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050521065",
        Label: "5FCBC13B7K1000289 #506 MAINTENANCE",
        Date: "9/29/2021 8:12:19 PM",
        "G-horiz": "5.9",
        "G-verti": "1.6",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/B16879CD-8291-4365-87E9-EA006FDDC868\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050358385",
        Label: "5FCBC13BXK1000268 #520 MAINTENANCE",
        Date: "9/29/2021 2:44:03 PM",
        "G-horiz": "5.3",
        "G-verti": "2.2",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/A18DA3B1-1B81-4CEB-B52B-1E85B119BC60\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050358385",
        Label: "5FCBC13BXK1000268 #520 MAINTENANCE",
        Date: "10/1/2021 4:52:11 PM",
        "G-horiz": "5.7",
        "G-verti": "4.8",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/89BCB3DB-1CEF-4986-801B-94FD0F38B6D8\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050358385",
        Label: "5FCBC13BXK1000268 #520 MAINTENANCE",
        Date: "10/4/2021 12:32:32 PM",
        "G-horiz": "5.8",
        "G-verti": "1.6",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/00FAA41F-825D-4F65-932D-46A16D58D509\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050358385",
        Label: "5FCBC13BXK1000268 #520 MAINTENANCE",
        Date: "10/5/2021 3:21:05 PM",
        "G-horiz": "6",
        "G-verti": "1.8",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/D8250C9E-A685-4DA8-B256-4B77186337A3\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050358385",
        Label: "5FCBC13BXK1000268 #520 MAINTENANCE",
        Date: "10/5/2021 3:22:50 PM",
        "G-horiz": "6",
        "G-verti": "1.8",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/C2A67AB1-5ED6-4007-BCDC-81A78D00D2BB\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050358385",
        Label: "5FCBC13BXK1000268 #520 MAINTENANCE",
        Date: "10/5/2021 4:59:37 PM",
        "G-horiz": "6.3",
        "G-verti": "1.4",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/8DB162BB-1266-4A98-9209-0BB1318D5147\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050358385",
        Label: "5FCBC13BXK1000268 #520 MAINTENANCE",
        Date: "10/5/2021 5:00:33 PM",
        "G-horiz": "6.3",
        "G-verti": "1.4",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/1C18B1E1-B821-4ECF-B312-2AA0C4DF0E93\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050846710",
        Label: "5FCBC13B3K1000290 #509 MAINTENANCE",
        Date: "9/30/2021 9:06:00 PM",
        "G-horiz": "6",
        "G-verti": "5.1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/2332C47E-AC8C-42D9-9DAC-3248D30A36CC\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050846710",
        Label: "5FCBC13B3K1000290 #509 MAINTENANCE",
        Date: "10/1/2021 5:16:34 PM",
        "G-horiz": "5.9",
        "G-verti": "2.2",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/4A3A10C9-544C-4178-9E1D-E367DDE506D1\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050846710",
        Label: "5FCBC13B3K1000290 #509 MAINTENANCE",
        Date: "10/4/2021 6:32:22 PM",
        "G-horiz": "5.8",
        "G-verti": "0.7",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/18A58CFB-14D9-4EAD-86E4-DBE0B98BEA91\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050846710",
        Label: "5FCBC13B3K1000290 #509 MAINTENANCE",
        Date: "10/4/2021 7:12:39 PM",
        "G-horiz": "5.7",
        "G-verti": "0.4",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/37999354-C8D4-4956-8FC7-FF6DEA792AC6\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050846710",
        Label: "5FCBC13B3K1000290 #509 MAINTENANCE",
        Date: "10/5/2021 1:47:44 AM",
        "G-horiz": "5.1",
        "G-verti": "2.8",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/FA45D273-8667-4B5E-889B-C56D480B5DF4\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050846710",
        Label: "5FCBC13B3K1000290 #509 MAINTENANCE",
        Date: "10/5/2021 2:08:19 AM",
        "G-horiz": "5.9",
        "G-verti": "2.1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/E7544689-B2CD-4BBE-BE9F-AE7BFC6B35CB\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050846710",
        Label: "5FCBC13B3K1000290 #509 MAINTENANCE",
        Date: "10/5/2021 2:10:22 AM",
        "G-horiz": "5.9",
        "G-verti": "3.3",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/739F2FD5-70CB-4A71-A26C-0FDE744A8806\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050846710",
        Label: "5FCBC13B3K1000290 #509 MAINTENANCE",
        Date: "10/5/2021 2:12:41 AM",
        "G-horiz": "5.9",
        "G-verti": "3.3",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/9EF7D188-1A1D-4814-BFC3-D5C8B4B1814C\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857051251225",
        Label: "5FCBC13B4K1000301 #513 MAINTENANCE",
        Date: "10/1/2021 12:15:23 PM",
        "G-horiz": "6.9",
        "G-verti": "1.3",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/C00E5E5B-2099-4D0B-B8BD-31E6D815575C\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050992191",
        Label: "5FCBC13B8K1000267 #517 MAINTENANCE",
        Date: "9/30/2021 4:54:14 PM",
        "G-horiz": "5.8",
        "G-verti": "2.9",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/530DED10-3CEE-4AB7-BF9B-07D5EBA329F0\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050992191",
        Label: "5FCBC13B8K1000267 #517 MAINTENANCE",
        Date: "9/30/2021 7:25:55 PM",
        "G-horiz": "5.1",
        "G-verti": "1.1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/3456D944-243D-4636-9C07-5CD25CF8652F\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857050992191",
        Label: "5FCBC13B8K1000267 #517 MAINTENANCE",
        Date: "9/30/2021 7:26:17 PM",
        "G-horiz": "5.1",
        "G-verti": "1.1",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/28462126-A22F-46AA-BD38-8437C13F3C52\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857051261307",
        Label: "5FCBC13B8K1000270 #518 MAINTENANCE",
        Date: "10/5/2021 12:15:23 PM",
        "G-horiz": "5.7",
        "G-verti": "1.3",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/F2086ACD-2EF5-4DA3-8CF9-0C750F9B4D51\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857051261307",
        Label: "5FCBC13B8K1000270 #518 MAINTENANCE",
        Date: "10/6/2021 6:47:06 AM",
        "G-horiz": "5",
        "G-verti": "1.3",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/187F2B44-9CF4-4558-9BA1-86BCAC14FD29\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857051262305",
        Label: "5FCBC13B1K1000269 #519 MAINTENANCE",
        Date: "10/1/2021 1:27:23 PM",
        "G-horiz": "5.3",
        "G-verti": "0.8",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/3577F026-AFA1-47D5-BDCA-CB3848D139E1\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857051262305",
        Label: "5FCBC13B1K1000269 #519 MAINTENANCE",
        Date: "10/1/2021 4:53:20 PM",
        "G-horiz": "5",
        "G-verti": "0.5",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/AE99F101-DABC-4DC5-87A4-EFA07A8BBD84\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
      {
        IMEI: "355857051262305",
        Label: "5FCBC13B1K1000269 #519 MAINTENANCE",
        Date: "10/4/2021 6:32:58 PM",
        "G-horiz": "5",
        "G-verti": "0.7",
        "View Impact":
          "\u003Ca href=\u0027https://track.4artemis.com/incident/detail/59CF90F0-8E15-454E-B4F7-970E413DD014\u0027 target=\u0027_blank\u0027\u003EView Impact\u003C/a\u003E",
      },
    ],
    list: "VehicleImpactAbnormal",
    defaultSortColumn: 3,
  },
  FleetUsageLong: {
    title: "Vehicle Utilization (most hours)",
    headings: [
      "IMEI",
      "Label",
      "Duration (hrs)",
      "Distance (mi)",
      "View Vehicle",
    ],
    data: [
      {
        IMEI: "355857050847205",
        Label: "5FCBC13B4K1000279 #560 GROUNDS",
        "Duration (hrs)": "24.4",
        "Distance (mi)": "18",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/4CA179D3-8E88-4D98-BCE9-E4D071994B46#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050849326",
        Label: "5FCBC13B1K1000255 #582 OPS CUSTODIAL",
        "Duration (hrs)": "18.8",
        "Distance (mi)": "18",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/1F2AB9BB-FE37-459F-9602-06661F4F765E#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051251209",
        Label: "B3LE4-5UT0412 # 550 GROUNDS/REFUSE",
        "Duration (hrs)": "17.5",
        "Distance (mi)": "9.9",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/637302D1-D48F-4DDD-B6D6-5C0F37029B6A#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051260853",
        Label: "5FCBC13B5K1000257 #583 OPS CUSTODIAL",
        "Duration (hrs)": "14.1",
        "Distance (mi)": "14.9",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/68DFD47C-EF15-4E00-98F1-EDAF55761D42#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050363849",
        Label: "5FCBC13B2K1000300 #512 MAINTENANCE",
        "Duration (hrs)": "13.3",
        "Distance (mi)": "26.9",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/6A161B50-6FB1-4B6A-B66D-E8AFCB6A19D8#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050847304",
        Label: "5FCBC13B2K1000278 #559 GROUNDS",
        "Duration (hrs)": "11.3",
        "Distance (mi)": "19.1",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/A598B153-090E-4D9D-A75D-ACD38C086272#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050527419",
        Label: "5FCBC13BXK1000304 #301 CAMPUS POLICE",
        "Duration (hrs)": "10.9",
        "Distance (mi)": "8.2",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/C2CA2DCF-98AF-4599-A86C-DBCD356A15C1#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050845886",
        Label: "5FCBC13B0K1000263 #590 OPS CUSTODIAL",
        "Duration (hrs)": "10.9",
        "Distance (mi)": "16.5",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/A73C755B-5883-41DC-9EB0-7C267CF5EE04#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050838253",
        Label: "5FCBC13B7K1000275 #556 GROUNDS",
        "Duration (hrs)": "10.6",
        "Distance (mi)": "17.9",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/3212BC30-0152-47BD-A0E3-C5554D9E09A9#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051260978",
        Label: "5FCBC13BXK1000285 #504 MAINTENANCE",
        "Duration (hrs)": "10.3",
        "Distance (mi)": "21.1",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/F580BD59-5ED4-4EFF-8DDD-3DE3AAE5EC98#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
    ],
    list: "FleetUsageLong",
    defaultSortColumn: 2,
  },
  FleetUsageShort: {
    title: "20 Least utilized (hours) vehicles in a week",
    headings: [
      "IMEI",
      "Label",
      "Duration (hrs)",
      "Distance (mi)",
      "View Vehicle",
    ],
    data: [
      {
        IMEI: "355857050953201",
        Label: "B3LE4-5UT0413 # 551 GROUNDS/REFUSE",
        "Duration (hrs)": "0.2",
        "Distance (mi)": "2.2",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/6945BF76-BD4D-42FC-B44F-DC5F9C32355C#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050849920",
        Label: "5FCBE13C4K1000236 #304 CAMPUS POLICE",
        "Duration (hrs)": "0.3",
        "Distance (mi)": "0.6",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/A5361A0E-E9F1-45DF-8B32-33DB390CE2D4#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050852569",
        Label: "5FCBC13B2K1000264 #577 OPS CUSTODIAL",
        "Duration (hrs)": "0.5",
        "Distance (mi)": "0.7",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/7C234E54-5D5B-43A3-8594-9A6A42A207AF#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050846777",
        Label: "5FCBC13B1K1000241 #202 AUXILIARY SVCS",
        "Duration (hrs)": "0.6",
        "Distance (mi)": "1",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/76304327-E32E-42CB-8A72-388210EB90DF#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050844632",
        Label: "5FCBC13B7K1000258 #586 OPS CUSTODIAL",
        "Duration (hrs)": "0.6",
        "Distance (mi)": "1.4",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/342A2E1D-D22B-4E03-A280-E1D948C73F4B#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050357031",
        Label: "5FCBC13B5K1000291 #508 MAINTENANCE",
        "Duration (hrs)": "0.6",
        "Distance (mi)": "0",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/924C5D42-82E1-47D6-B62C-59CA7BA30657#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051240418",
        Label: "5FCBC13B6K1000252 #601 MEDIA",
        "Duration (hrs)": "1.2",
        "Distance (mi)": "1",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/5464CFCC-DEFD-4169-93EE-368FC88F3425#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050522592",
        Label: "5FCBC13B5K1000288 #511 MAINTENANCE",
        "Duration (hrs)": "1.3",
        "Distance (mi)": "2",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/F9223362-0E7F-448A-B2B2-2575CE941A69#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050845175",
        Label: "5FCBE13C6K1000240 #101 FACILITIES/PLANNING",
        "Duration (hrs)": "1.4",
        "Distance (mi)": "1.7",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/18A0DBAC-20D9-4356-A118-D673E6A5F885#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051271819",
        Label: "5FCBC13B3K1000239 #563 SYST RECYCLING",
        "Duration (hrs)": "1.5",
        "Distance (mi)": "1.8",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/66635B57-ED82-4417-88B3-B1FEF19262C5#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050849680",
        Label: "5FCBC13B9K1000276 #558 MAINTENANCE",
        "Duration (hrs)": "1.5",
        "Distance (mi)": "3.4",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/2BC8874D-95AD-4B3E-9AAB-823143CD02C9#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050851611",
        Label: "5FCBC13B3K1000242 #206 TRANSPORTATION",
        "Duration (hrs)": "1.7",
        "Distance (mi)": "1.9",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/7E7B8EF2-9098-4FC6-91B6-07ED42DE0E9D#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051283327",
        Label: "5FCBC13B6K1000249 #205 CAMPUS STORE",
        "Duration (hrs)": "2.2",
        "Distance (mi)": "4.5",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/B84E98F7-4F47-4F3B-8C62-1CDF604CD674#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050846520",
        Label: "5FCBC13B2K1000250 #603 TELECOMMUNICATION",
        "Duration (hrs)": "2.2",
        "Distance (mi)": "3.3",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/16EDCDE1-8A1D-4B92-BEE0-F69F9BB5A273#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051261307",
        Label: "5FCBC13B8K1000270 #518 MAINTENANCE",
        "Duration (hrs)": "2.4",
        "Distance (mi)": "14.2",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/A3808B8F-1BD2-43F9-837D-4E26CAAAFADF#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050992191",
        Label: "5FCBC13B8K1000267 #517 MAINTENANCE",
        "Duration (hrs)": "2.5",
        "Distance (mi)": "4.2",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/0DB37373-AF04-43B2-BE89-4098FB9A91CB#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051282766",
        Label: "5FCBC13B2K1000247 #201 REPROGRAPHIC",
        "Duration (hrs)": "2.8",
        "Distance (mi)": "4.9",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/8A44CA5E-E9B7-4D99-9BD3-ABC367FC61C8#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050844103",
        Label: "5FCBC13BXK1000254 #501 MAINTENANCE",
        "Duration (hrs)": "3.7",
        "Distance (mi)": "5.4",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/523FBB8C-B93B-444F-8409-F9AC2F90F4B7#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857051283277",
        Label: "5FCBC13B4K1000248 #204 CAMPUS STORE",
        "Duration (hrs)": "3.9",
        "Distance (mi)": "12.2",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/F5946676-D6FD-4B5A-B87C-4DA5F58D6B44#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
      {
        IMEI: "355857050848922",
        Label: "5FCBC13B6K1000302 #514 MAINTENANCE",
        "Duration (hrs)": "4",
        "Distance (mi)": "6.4",
        "View Vehicle":
          "\u003Ca href=\u0027https://track.4artemis.com/device/detail/3C3162D3-2A52-49A3-BD3C-9C3FA5213DCD#journeys\u0027 target=\u0027_blank\u0027\u003EView Vehicle\u003C/a\u003E",
      },
    ],
    list: "FleetUsageShort",
    defaultSortColumn: 2,
  },
};
