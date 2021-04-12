// export const License_TYPES = {
//   "General Contractor": "GENERAL CONTRACTOR",
//   "Superintendent of Construction": "SUPERINTENDENT OF CONSTRUCTION",
//   Welder: "WELDER",
//   "Filing Representive": "FILING REPRESENTATIVE",
//   "Eletrical Firm": "ELECTRICAL FIRM",
//   Journeyman: "Journey Man",
//   "Eletrical Contractor": "E",
// };

export const License_TYPES = [
  { value: "GENERAL CONTRACTOR", label: "General Contractor" },
  {
    value: "SUPERINTENDENT OF CONSTRUCTION",
    label: "SuperIntendent of Construction",
  },
  { value: "WELDER", label: "Welder" },
  { value: "FILING REPRESENTATIVE", label: "Filing Representative" },
  { value: "ELECTRICAL FIRM", label: "Electrical Firm" },
  { value: "JOURNEYMAN", label: "Journeyman" },
  { value: "ELECTRICAL CONTRACTOR", label: "Electical Contractor" },
  {
    value: "STATIONARY / PORTABLE ENGINEER",
    label: "Stationary / Portable Engineer",
  },
  { value: "HOIST MACHINE OPERATOR", label: "Hoist Machine Operator" },
  {
    value: "ELEVATOR AGENCY / INSPECTOR",
    label: "Elevator Agency / Inspector",
  },
  { value: "MASTER PLUMBER", label: "Master Plumber" },
  { value: "SITE SAFETY", label: "Site Safety" },
  { value: "SPECIAL INSPECTION AGENCY", label: "Special Inspection Agency" },
  { value: "RIGGER", label: "Rigger" },
  {
    value: "FIRE SUPPRESSION CONTRACTOR",
    label: "Fire Suppression Contractor",
  },
  {
    value: "CONCRETE TEST LAB / SAFETY MANAGER",
    label: "Concrete Test Lab / Safety Manager",
  },
  { value: "OIL BURNER INSTALLER", label: "Oil Burner Installer" },
  { value: "SIGN HANGER", label: "Sign Hanger" },
  { value: "TOWER CRANE RIGGER", label: "Tower Crane Rigger" },
];

export const VALID_NYC_ZIPCODES = [
  10001,
  10451,
  10002,
  10452,
  10003,
  10453,
  10004,
  10454,
  10005,
  10455,
  10006,
  10456,
  10007,
  10457,
  10009,
  10458,
  10010,
  10459,
  10011,
  10460,
  10012,
  10461,
  10013,
  10462,
  10014,
  10463,
  10015,
  10464,
  10016,
  10465,
  10017,
  10466,
  10018,
  10467,
  10019,
  10468,
  10020,
  10469,
  10021,
  10470,
  10022,
  10471,
  10023,
  10472,
  10024,
  10473,
  10025,
  10474,
  10026,
  10475,
  10027,
  11201,
  10028,
  11203,
  10029,
  11204,
  10030,
  11205,
  10031,
  11206,
  10032,
  11207,
  10033,
  11208,
  10034,
  11209,
  10035,
  11210,
  10036,
  11211,
  10037,
  11212,
  10038,
  11213,
  10039,
  11214,
  10040,
  11215,
  10041,
  11216,
  10044,
  11217,
  10045,
  11218,
  10048,
  11219,
  10055,
  11220,
  10060,
  11221,
  10069,
  11222,
  10090,
  11223,
  10095,
  11224,
  10098,
  11225,
  10099,
  11226,
  10103,
  11228,
  10104,
  11229,
  10105,
  11230,
  10106,
  11231,
  10107,
  11232,
  10110,
  11233,
  10111,
  11234,
  10112,
  11235,
  10115,
  11236,
  10118,
  11237,
  10119,
  11238,
  10120,
  11239,
  10121,
  11241,
  10122,
  11242,
  10123,
  11243,
  10128,
  11249,
  10151,
  11252,
  10152,
  11256,
  10153,
  10001,
  10154,
  10002,
  10155,
  10003,
  10158,
  10004,
  10161,
  10005,
  10162,
  10006,
  10165,
  10007,
  10166,
  10009,
  10167,
  10010,
  10168,
  10011,
  10169,
  10012,
  10170,
  10013,
  10171,
  10014,
  10172,
  10015,
  10173,
  10016,
  10174,
  10017,
  10175,
  10018,
  10176,
  10019,
  10177,
  10020,
  10178,
  10021,
  10199,
  10022,
  10270,
  10023,
  10271,
  10024,
  10278,
  10025,
  10279,
  10026,
  10280,
  10027,
  10281,
  10028,
  10282,
  10029,
  10301,
  10030,
  10302,
  10031,
  10303,
  10032,
  10304,
  10033,
  10305,
  10034,
  10306,
  10035,
  10307,
  10036,
  10308,
  10037,
  10309,
  10038,
  10310,
  10039,
  10311,
  10040,
  10312,
  10041,
  10314,
  10044,
  10451,
  10045,
  10452,
  10048,
  10453,
  10055,
  10454,
  10060,
  10455,
  10069,
  10456,
  10090,
  10457,
  10095,
  10458,
  10098,
  10459,
  10099,
  10460,
  10103,
  10461,
  10104,
  10462,
  10105,
  10463,
  10106,
  10464,
  10107,
  10465,
  10110,
  10466,
  10111,
  10467,
  10112,
  10468,
  10115,
  10469,
  10118,
  10470,
  10119,
  10471,
  10120,
  10472,
  10121,
  10473,
  10122,
  10474,
  10123,
  10475,
  10128,
  11004,
  10151,
  11101,
  10152,
  11102,
  10153,
  11103,
  10154,
  11104,
  10155,
  11105,
  10158,
  11106,
  10161,
  11109,
  10162,
  11201,
  10165,
  11203,
  10166,
  11204,
  10167,
  11205,
  10168,
  11206,
  10169,
  11207,
  10170,
  11208,
  10171,
  11209,
  10172,
  11210,
  10173,
  11211,
  10174,
  11212,
  10175,
  11213,
  10176,
  11214,
  10177,
  11215,
  10178,
  11216,
  10199,
  11217,
  10270,
  11218,
  10271,
  11219,
  10278,
  11220,
  10279,
  11221,
  10280,
  11222,
  10281,
  11223,
  10282,
  11224,
  11101,
  11225,
  11102,
  11226,
  11103,
  11228,
  11004,
  11229,
  11104,
  11230,
  11105,
  11231,
  11106,
  11232,
  11109,
  11233,
  11351,
  11234,
  11354,
  11235,
  11355,
  11236,
  11356,
  11237,
  11357,
  11238,
  11358,
  11239,
  11359,
  11241,
  11360,
  11242,
  11361,
  11243,
  11362,
  11249,
  11363,
  11252,
  11364,
  11256,
  11365,
  11351,
  11366,
  11354,
  11367,
  11355,
  11368,
  11356,
  11369,
  11357,
  11370,
  11358,
  11371,
  11359,
  11372,
  11360,
  11373,
  11361,
  11374,
  11362,
  11375,
  11363,
  11377,
  11364,
  11378,
  11365,
  11379,
  11366,
  11385,
  11367,
  11411,
  11368,
  11412,
  11369,
  11413,
  11370,
  11414,
  11371,
  11415,
  11372,
  11416,
  11373,
  11417,
  11374,
  11418,
  11375,
  11419,
  11377,
  11420,
  11378,
  11421,
  11379,
  11422,
  11385,
  11423,
  11411,
  11426,
  11412,
  11427,
  11413,
  11428,
  11414,
  11429,
  11415,
  11430,
  11416,
  11432,
  11417,
  11433,
  11418,
  11434,
  11419,
  11435,
  11420,
  11436,
  11421,
  11691,
  11422,
  11692,
  11423,
  11693,
  11426,
  11694,
  11427,
  11697,
  11428,
  10301,
  11429,
  10302,
  11430,
  10303,
  11432,
  10304,
  11433,
  10305,
  11434,
  10306,
  11435,
  10307,
  11436,
  10308,
  11691,
  10309,
  11692,
  10310,
  11693,
  10311,
  11694,
  10312,
  11697,
  10314,
];
