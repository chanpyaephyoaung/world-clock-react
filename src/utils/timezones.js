// Slicing category from Timezone: 'Asia/Yangon' => 'Asia'
export const sliceCategory = tmz => {
  return tmz.substring(0, tmz.indexOf("/"));
};

// Slicing zone from Timezone: 'Asia/Yangon' => 'Yangon'
export const sliceZoneName = tmz => {
  return tmz.slice(tmz.indexOf("/") + 1);
};

// Categorize Timezones
export const categorize = tmzs => {
  return [...new Set(tmzs)];
};
