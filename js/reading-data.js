/*
 * Reading log source — a public Google Spreadsheet, one tab per year.
 * The Reading card fetches each tab live (via the gviz CSV endpoint, which
 * supports CORS) and lists the books whose 閱讀狀態 (status) column is "完".
 *
 * Columns are read by position: col 0 = 書名 (title), col 1 = 閱讀狀態 (status).
 * The first row of each tab is skipped (header / leftover cell).
 *
 * To add a new year: create a tab named with the year, then add its
 * { year, gid } here. (Find the gid in the tab's URL: ...#gid=NNN)
 */
const READING_SHEET_ID = '1GshPiPDfL3QjKAWlctKVkwseslyb-Z9vvw866hvcllU';

const READING_YEARS = [
  { year: '2026', gid: '0' },
  { year: '2025', gid: '418577580' },
  { year: '2024', gid: '1533588078' },
  { year: '2023', gid: '1603722775' },
  { year: '2022', gid: '2031534474' },
  { year: '2021', gid: '743865884' }
];
