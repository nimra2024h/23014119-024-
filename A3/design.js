// Main styling function
function applyStyles() {
    styleBody();
    styleHeader();
    styleNavigation();
    styleMainContent();
    styleImages();
    styleFooter();
    setupResponsiveDesign();
}

// Body styles
function styleBody() {
    document.body.style.margin = '0';
    document.body.style.padding = '20px';
    document.body.style.fontFamily = 'Georgia, serif';
    document.body.style.backgroundColor = '#fffafc';
    document.body.style.color = '#4b2e2e';
    document.body.style.lineHeight = '1.8';
}

// Header styles
function styleHeader() {
    const header = document.querySelector('header');
    if (!header) return;
    
    header.style.backgroundColor = '#ffe3e3';
    header.style.padding = '20px';
    header.style.textAlign = 'center';
    header.style.borderRadius = '15px';
    header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    
    const h1 = header.querySelector('h1');
    if (h1) {
        h1.style.fontSize = '2.5em';
        h1.style.color = '#a34343';
        h1.style.marginBottom = '10px';
        h1.style.textShadow = '1px 1px 2px #fff';
    }
}

// Navigation styles
function styleNavigation() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    
    nav.style.marginTop = '10px';
    nav.style.display = 'flex';
    nav.style.flexWrap = 'wrap';
    nav.style.justifyContent = 'center';
    nav.style.gap = '10px';
    
    const links = nav.querySelectorAll('a');
    links.forEach(link => {
        link.style.textDecoration = 'none';
        link.style.color = '#7c2d2d';
        link.style.fontWeight = 'bold';
        link.style.padding = '8px 12px';
        link.style.borderRadius = '8px';
        link.style.transition = 'background-color 0.3s';
        
        link.addEventListener('mouseover', () => {
            link.style.backgroundColor = '#f4c2c2';
        });
        
        link.addEventListener('mouseout', () => {
            link.style.backgroundColor = '';
        });
    });
}

// Main content styles
function styleMainContent() {
    const main = document.querySelector('main');
    if (!main) return;
    
    main.style.maxWidth = '900px';
    main.style.margin = '40px auto';
    main.style.backgroundColor = '#fff4f4';
    main.style.padding = '30px';
    main.style.borderRadius = '20px';
    main.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    
    // Style headings
    const h2s = main.querySelectorAll('h2');
    h2s.forEach(h2 => {
        h2.style.fontSize = '2em';
        h2.style.color = '#993333';
        h2.style.marginBottom = '20px';
    });
    
    const h3s = main.querySelectorAll('h3');
    h3s.forEach(h3 => {
        h3.style.color = '#a94a4a';
        h3.style.marginTop = '25px';
    });
    
    // Style paragraphs and lists
    const paragraphs = main.querySelectorAll('p');
    paragraphs.forEach(p => {
        p.style.fontSize = '1.1em';
        p.style.marginBottom = '15px';
    });
    
    const uls = main.querySelectorAll('ul');
    uls.forEach(ul => {
        ul.style.paddingLeft = '20px';
        
        const lis = ul.querySelectorAll('li');
        lis.forEach(li => {
            li.style.fontSize = '1.1em';
            li.style.marginBottom = '15px';
        });
    });
}

// Image styles
function styleImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.display = 'block';
        img.style.margin = '15px auto';
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        img.style.borderRadius = '12px';
        img.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    });
    
    const figures = document.querySelectorAll('figure');
    figures.forEach(figure => {
        figure.style.marginBottom = '30px';
    });
    
    const figcaptions = document.querySelectorAll('figcaption');
    figcaptions.forEach(figcaption => {
        figcaption.style.textAlign = 'center';
        figcaption.style.fontSize = '0.95em';
        figcaption.style.color = '#6a3b3b';
    });
}

// Footer styles
function styleFooter() {
    const footer = document.querySelector('footer');
    if (!footer) return;
    
    footer.style.textAlign = 'center';
    footer.style.padding = '15px';
    footer.style.backgroundColor = '#ffe3e3';
    footer.style.marginTop = '50px';
    footer.style.borderRadius = '10px';
    footer.style.fontSize = '0.9em';
    footer.style.color = '#a34f4f';
    footer.style.boxShadow = '0 3px 6px rgba(0, 0, 0, 0.05)';
}

// Responsive design
function setupResponsiveDesign() {
    function handleResize() {
        const width = window.innerWidth;
        const nav = document.querySelector('nav');
        
        if (width <= 768) {
            // Tablet styles
            document.querySelector('header h1').style.fontSize = '2em';
            
            if (nav) {
                nav.style.flexDirection = 'column';
                nav.style.alignItems = 'center';
                
                const links = nav.querySelectorAll('a');
                links.forEach(link => {
                    link.style.display = 'block';
                    link.style.width = '100%';
                    link.style.maxWidth = '250px';
                    link.style.textAlign = 'center';
                    link.style.backgroundColor = '#fddada';
                });
            }
            
            const main = document.querySelector('main');
            if (main) {
                main.style.padding = '20px';
                
                const h2s = main.querySelectorAll('h2');
                h2s.forEach(h2 => {
                    h2.style.fontSize = '1.5em';
                });
                
                const ps = main.querySelectorAll('p');
                ps.forEach(p => {
                    p.style.fontSize = '1em';
                });
            }
        }
        
        if (width <= 480) {
            // Mobile styles
            document.body.style.padding = '10px';
            document.querySelector('header h1').style.fontSize = '1.6em';
            
            if (nav) {
                const links = nav.querySelectorAll('a');
                links.forEach(link => {
                    link.style.fontSize = '0.95em';
                    link.style.padding = '10px';
                });
            }
            
            const main = document.querySelector('main');
            if (main) {
                const h2s = main.querySelectorAll('h2');
                h2s.forEach(h2 => {
                    h2.style.fontSize = '1.3em';
                });
                
                const ps = main.querySelectorAll('p');
                ps.forEach(p => {
                    p.style.fontSize = '0.95em';
                });
            }
            
            const footer = document.querySelector('footer');
            if (footer) {
                footer.style.fontSize = '0.8em';
                footer.style.padding = '10px';
            }
        }
    }
    
    // Initial call
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', applyStyles);