async function fetchAndParseJSON(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching and parsing JSON:', error);
  }
}

const colors = {
  purple:    "#884EA0",
  yellow:    '#D4AC0D',
  blue:      '#2E86C1',
  grey:      '#A6ACAF',
  red:       '#CB4335',
  green:     '#229954',
  orange:    '#BA4A00',
  turquoise: '#17A589',
}

const color_map = {
  Pascal: colors.yellow,
  Elena: colors.purple,
  Leandro: colors.green,
  Fabio: colors.blue,
  Stanley: colors.red,
  Rafael: colors.grey,
  Alan: colors.orange,
  Yara: colors.turquoise,
}

export { fetchAndParseJSON, colors, color_map };