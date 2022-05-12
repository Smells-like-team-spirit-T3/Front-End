import css from 'styled-jsx/css'

// Global styles

export const calendarStyle = css`

div {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
    // padding: 5px;
}

`

export const globalBody = css.global`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
}
* {
  box-sizing: border-box;
}
`

export const mainPageBody = css`

.container {
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

main {
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

footer {
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
}

footer img {
    margin-left: 0.5rem;
}

footer a {
    display: flex;
    justify-content: center;
    align-items: center;
}

a {
    color: inherit;
    text-decoration: none;
}

.title a {
    color: #0070f3;
    text-decoration: none;
}

.title a:hover,
.title a:focus,
.title a:active {
    text-decoration: underline;
}

.title {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
}

.title,
.description {
    text-align: center;
}

.description {
    line-height: 1.5;
    font-size: 1.5rem;
}

code {
    background: #fafafa;
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1.1rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
}

.grid {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    max-width: 800px;
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.card {
    margin: 1rem;
    flex-basis: 45%;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
}

.card:hover,
.card:focus,
.card:active {
    color: #0070f3;
    border-color: #0070f3;
}

.card h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
}

.card p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
}

.logo {
    height: 1em;
}

@media (max-width: 600px) {
    .grid {
    width: 100%;
    flex-direction: column;
    }
}

/* Form */

input[type=date], input[type=number], select, input[type=text]{
    width: 100%; /* Full width */
    padding: 12px; /* Some padding */ 
    border: 1px solid #ccc; /* Gray border */
    border-radius: 4px; /* Rounded borders */
    box-sizing: border-box; /* Make sure that padding and width stays in place */
    margin-top: 6px; /* Add a top margin */
    margin-bottom: 16px; /* Bottom margin */
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
  
  /* Style the submit button with a specific background color etc */
input[type=submit] {
    background-color: #04AA6D;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
  }
  
  /* When moving the mouse over the submit button, add a darker green color */
  input[type=submit]:hover {
    background-color: #45a049;
  }
  
`

export const codeInput = css`
$primary: #11998e;
$secondary: #38ef7d;
$white: #fff;
$gray: #9b9b9b;
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1.3rem;
  color: $white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: $gray;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $primary;
    font-weight:700;    
  }
  padding-bottom: 6px;  
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $primary,$secondary);
  border-image-slice: 1;
}
/* reset input */
.form__field{
  &:required,&:invalid { box-shadow:none; }
}
/* demo */
body {
  font-family: 'Poppins', sans-serif; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.5rem;
  background-color:#222222;
}

`