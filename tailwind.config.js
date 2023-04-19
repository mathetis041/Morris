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
        columns: '178px',
        col_mob : '190px',
        col_laptop : '298px',
        section_p : '500px',
        sect_p_laptop : '620px',
        ham_menu_w : '425px',
      },
      height: {
        ham_menu_h: '520px',
      }
    }
  },
  plugins: [],
}
