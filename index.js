const width = window.innerWidth;
const height = window.innerHeight;

const svg = document.createElementNS('http://www.w3.org/2000/svg','svg')
svg.setAttribute("width",width);
svg.setAttribute("height",height);
document.body.appendChild(svg);

const mask = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'mask'
);
mask.setAttribute("id","circle-mask")
svg.appendChild(mask);

const maskRect = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'rect'
);

maskRect.setAttribute("width",width);
maskRect.setAttribute("height",height);
maskRect.setAttribute('fill','black')


mask.appendChild(maskRect);

const circle = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle'
);
circle.setAttribute("cx",width/2);
circle.setAttribute("cy",height/2);
circle.setAttribute("r",200)
circle.setAttribute('fill','white')
mask.appendChild(circle);

const mask2 = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'mask'
);
mask2.setAttribute("id","circle-mask2")
svg.appendChild(mask2);

const maskRect2 = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'rect'
);

maskRect2.setAttribute("width",width);
maskRect2.setAttribute("height",height);
maskRect2.setAttribute('fill','white')


mask2.appendChild(maskRect2);

const circle2 = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle'
);
circle2.setAttribute("cx",width/2);
circle2.setAttribute("cy",height/2);
circle2.setAttribute("r",200)
circle2.setAttribute('fill','black')
mask2.appendChild(circle2);






const n = 100;
for(let i = 0; i < n; i++){
    const rect = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'rect'
    );
    rect.setAttribute("y",20*i)
    rect.setAttribute("width",width);
    rect.setAttribute("height",10);
    rect.setAttribute('fill','black')
    rect.setAttribute('mask','url(#circle-mask)')
    svg.appendChild(rect);
}


for(let i = 0; i < n; i++){
    const rect = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'rect'
    );
    rect.setAttribute("x",20*i)
    rect.setAttribute("width",10);
    rect.setAttribute("height",width);
    rect.setAttribute('mask','url(#circle-mask2)')
    svg.appendChild(rect);
}


