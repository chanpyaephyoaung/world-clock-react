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

// Fetching timezones list
export const fetchTmzs = async storeData => {
  try {
    const response = await fetch(
      `http://api.timezonedb.com/v2.1/list-time-zone?key=${
        import.meta.env.VITE_TMZDB_API_KEY
      }&format=json`
    );
    if (!response.ok) throw new Error("Could not fetch timezones!");

    let { zones: rawTimezones } = await response.json();

    // Data Transformation
    rawTimezones = rawTimezones.map(({ zoneName }) => ({
      category: sliceCategory(zoneName),
      timezone: zoneName,
    }));

    const categories = categorize(rawTimezones.map(({ category }) => category));

    let finalTimezones = [];
    categories.forEach((category, index) => {
      finalTimezones.push({
        id: index + 1,
        category,
        timezones: rawTimezones
          .filter(tmz => tmz.category === category)
          .map(({ timezone }) => timezone),
      });
    });

    // Store transformed data
    storeData(finalTimezones);
  } catch (err) {
    console.error(`${err.message} 😭😭😭`);
    throw err;
  }
};
