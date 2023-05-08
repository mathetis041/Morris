/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    extend: {
      fontSize: {
        laptop : '3.5rem',
        para : '1.41rem', 
        tablet : '2.8rem',
      },
      width: {
        col_tab: '178px',
        col_mob : '196px',
        col_laptop : '230px',
        section_p : '500px',
        sect_p_laptop : '200px',
        ham_menu_w : '425px',
        col_xl_laptop : '300px',
      },
      height: {
        ham_menu_h: '550px',
      },
    }
  },
  plugins: [],
}
