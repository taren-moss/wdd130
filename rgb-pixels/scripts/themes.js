const rnbwTheme = {
    themeName: 'rnbwTheme',
    rootFolder: 'rnbw',

    primaryColor: '#2A2F54',
    secondaryColor: '#161537',
    tertiaryColor: '#3A4D72',

    textColor: '#FDECBF',
    textHover: '#EDC278',

    headingFont: 'Bebas Neue',
    paragraphFont: 'Teko',
}

const rgbTheme = {
    themeName: 'rgbTheme',
    rootFolder: 'rgb',

    primaryColor: '#1F1F1F',
    secondaryColor: '#000000',
    tertiaryColor: '#303030',

    textColor: '#DCF3CE',
    textHover: '#F1CE6C',
    
    headingFont: 'Bebas Neue',
    paragraphFont: 'Teko'
}

function setThemeImages (theme, className) {
    const images = document.getElementsByClassName(className)
    for(let i = 0; i < images.length; ++i) {
        filename = images[i].src.split('/').pop()
        images[i].src =  `images/themes/${theme.rootFolder}/${filename}`
    }   
}

function setThemeRoot (theme) {
    document.documentElement.style.setProperty('--primary-color', theme.primaryColor)
    document.documentElement.style.setProperty('--secondary-color', theme.secondaryColor)
    document.documentElement.style.setProperty('--tertiary-color', theme.tertiaryColor)

    document.documentElement.style.setProperty('--text-color', theme.textColor)
    document.documentElement.style.setProperty('--text-hover', theme.textHover)
}
setThemeRoot(rnbwTheme)

function setThemeText (theme, className) {
    const text = document.getElementsByClassName(className)
    for(let i = 0; i < text.length; ++i) {
        text[i].style.color = theme.textColor
    }
}

function setTheme (theme) {
    setThemeImages(theme, 'themed-img')
    setThemeImages(theme, 'frame')
    document.querySelector('.dropbutton').src = `images/themes/${theme.rootFolder}/settings_button.png`
    setThemeRoot(theme)
    document.cookie = theme.themeName
    console.log(document.cookie)
}

let cookieData = document.cookie
if (cookieData == 'rnbwTheme') {
    setTheme(rnbwTheme)
}
if (cookieData == 'rgbTheme') {
    setTheme(rgbTheme)
}