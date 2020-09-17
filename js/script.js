// Companies Data
const companies = [
  {
    id: 1,
    company_name: "Babbleset",
    year_1st_rev: "7167.73",
    year_2nd_rev: "4771.61",
  },
  {
    id: 2,
    company_name: "Jatri",
    year_1st_rev: "3091.15",
    year_2nd_rev: "3647.82",
  },
  {
    id: 3,
    company_name: "Vidoo",
    year_1st_rev: "70.41",
    year_2nd_rev: "1252.98",
  },
  {
    id: 4,
    company_name: "DabZ",
    year_1st_rev: "2868.98",
    year_2nd_rev: "8489.56",
  },
  {
    id: 5,
    company_name: "Meezzy",
    year_1st_rev: "9783.48",
    year_2nd_rev: "1362.28",
  },
  {
    id: 6,
    company_name: "Tagfeed",
    year_1st_rev: "1355.33",
    year_2nd_rev: "7404.67",
  },
  {
    id: 7,
    company_name: "Vinder",
    year_1st_rev: "7081.62",
    year_2nd_rev: "185.30",
  },
  {
    id: 8,
    company_name: "Minyx",
    year_1st_rev: "401.87",
    year_2nd_rev: "1084.14",
  },
  {
    id: 9,
    company_name: "Jayo",
    year_1st_rev: "5011.07",
    year_2nd_rev: "6306.93",
  },
  {
    id: 10,
    company_name: "Skyvu",
    year_1st_rev: "630.85",
    year_2nd_rev: "3884.65",
  },
  {
    id: 11,
    company_name: "Tavu",
    year_1st_rev: "1623.38",
    year_2nd_rev: "7077.21",
  },
  {
    id: 12,
    company_name: "Tagcat",
    year_1st_rev: "6152.88",
    year_2nd_rev: "1837.66",
  },
  {
    id: 13,
    company_name: "Jabberstorm",
    year_1st_rev: "9885.58",
    year_2nd_rev: "1455.25",
  },
  {
    id: 14,
    company_name: "Photobug",
    year_1st_rev: "218.23",
    year_2nd_rev: "9333.18",
  },
  {
    id: 15,
    company_name: "Snaptags",
    year_1st_rev: "9565.01",
    year_2nd_rev: "6667.51",
  },
  {
    id: 16,
    company_name: "Zoonder",
    year_1st_rev: "5909.01",
    year_2nd_rev: "3039.97",
  },
  {
    id: 17,
    company_name: "Photofeed",
    year_1st_rev: "7810.60",
    year_2nd_rev: "3257.16",
  },
  {
    id: 18,
    company_name: "Realpoint",
    year_1st_rev: "569.53",
    year_2nd_rev: "9137.31",
  },
  {
    id: 19,
    company_name: "Flipbug",
    year_1st_rev: "2417.83",
    year_2nd_rev: "2976.12",
  },
  {
    id: 20,
    company_name: "Yadel",
    year_1st_rev: "8725.14",
    year_2nd_rev: "5766.64",
  },
];

var xlabels = [];
xlabels = companies.map(function (company) {
  return company.company_name;
});
console.log(xlabels);

var rev_1st = [];
rev_1st = companies.map(function (company) {
  return company.year_1st_rev;
});
console.log(rev_1st);

var rev_2nd = [];
rev_2nd = companies.map(function (company) {
  return company.year_2nd_rev;
});
console.log(rev_2nd);

// Charts Begins Here
const ctx = document.getElementById("myChart");

// Global Properties
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontColor = "#777";
Chart.defaults.global.defaultFontSize = 12;

const chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: xlabels,
    datasets: [
      {
        label: "1st Year Revenue",
        data: rev_1st,
        backgroundColor: "#ff6361",
      },
      {
        label: "2nd Year Revenue",
        data: rev_2nd,
        backgroundColor: "#003f5c",
      },
    ],
  },
  options: {
    legends: {
      display: true,
    },
    title: {
      display: true,
      text: "Rando Company Revenue's",
      fontSize: 20,
    },
  },
});
