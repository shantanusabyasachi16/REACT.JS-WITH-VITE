// The belocw code is the view of how react actually generalize the code.

const main = document.querySelector('#root')


const reactElement = {
    type: 'a',
    props: {
        href: "https://www.google.com/"
    },
    children : 'vist google'
}



function customrender(reactElement,main){
 const dom = document.createElement (reactElement.type) 
 dom.innerHTML = reactElement.children
 for (const key in reactElement.props) {
    //if (key === "children")  continue
      dom.setAttribute(key, reactElement.props[key])  
    
   
 }
 main.appendChild(dom)
}
customrender(reactElement, main)

