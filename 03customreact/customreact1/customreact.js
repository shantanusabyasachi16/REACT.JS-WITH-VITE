// The belocw code is the view of how react actually generalize the code.

const main = document.querySelector('#root')


const reactElement = {
    type: 'a',
    props: {
        href: "https://www.google.com/"
    },
    children : 'vist google'
}
customrender(reactElement, main)
function customrender(reactElement,main){
   const domElement= document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   domElement.setAttribute('href',reactElement.props.href)
  
main.appendChild(domElement)
}
customrender(main, reactElement)
