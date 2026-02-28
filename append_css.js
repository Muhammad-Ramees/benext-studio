const fs = require('fs')
const path = require('path')

const cssVars = `/* Reveal animation */
.reveal { opacity: 0; transform: translateY(30px) scale(0.98); transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
.reveal.visible { opacity: 1; transform: translateY(0) scale(1); }

/* Premium UI Elements */
.card-premium { background: var(--color-panel); border: 1px solid var(--color-border); border-radius: 16px; backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); position: relative; overflow: hidden; }
.card-premium::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--color-primary), transparent); opacity: 0; transition: opacity 0.4s ease; }
.card-premium:hover { transform: translateY(-5px); border-color: rgba(30, 107, 255, 0.3); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px var(--color-primary-glow); }
.card-premium:hover::before { opacity: 1; }

/* Buttons */
.btn-premium { background: linear-gradient(135deg, #1e6bff 0%, #0044cc 100%); color: #fff; font-family: 'Syne', sans-serif; font-weight: 700; padding: 16px 32px; border-radius: 999px; border: none; cursor: pointer; position: relative; overflow: hidden; transition: all 0.3s ease; box-shadow: 0 4px 15px var(--color-primary-glow); display: inline-flex; align-items: center; justify-content: center; gap: 12px; letter-spacing: 0.02em; }
.btn-premium::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent); transform: translateX(-100%); transition: transform 0.6s ease; }
.btn-premium:hover { transform: translateY(-2px); box-shadow: 0 8px 25px var(--color-primary-glow); }
.btn-premium:hover::after { transform: translateX(100%); }

.btn-outline { background: transparent; color: var(--color-text); font-family: 'Syne', sans-serif; font-weight: 600; padding: 16px 32px; border-radius: 999px; border: 1px solid var(--color-border); cursor: pointer; transition: all 0.3s ease; display: inline-flex; align-items: center; gap: 12px; }
.btn-outline:hover { border-color: var(--color-primary); color: var(--color-primary); background: rgba(30, 107, 255, 0.05); }

/* Utilities */
.glass { background: rgba(10, 15, 25, 0.6); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid var(--color-border); }
.text-gradient { background: linear-gradient(135deg, #ffffff 0%, #8b9bb4 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.text-gradient-blue { background: linear-gradient(135deg, #4da6ff 0%, #1e6bff 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.bg-gradient-blue { background: linear-gradient(135deg, #1e6bff 0%, #0044cc 100%); }
.text-glow { text-shadow: 0 0 20px var(--color-primary-glow); }
::selection { background: var(--color-primary); color: #fff; }`

fs.appendFileSync(path.join(__dirname, 'app/globals.css'), '\n' + cssVars)
console.log('Fixed css')
