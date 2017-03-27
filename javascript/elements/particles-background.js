/** @jsx h */
import '@skatejs/web-components';

import {
    Component,
    h,
    prop
} from 'skatejs';

import ParticleLab from './particle-lab'


class ParticlesBackground extends Component {
    constructor(){
        super()
        this.createBackground = this.createBackground.bind(this)
        this.loadParticles = ParticleLab.bind(this)
    }
    static get props() {
        return {
            ref: prop.string({
                attribute: true,
                default: Math.random().toString(36).substring(2)
            }),
            theme: prop.string({
                attribute: true
            })
        }
    }
    renderCallback() {
        return <div style="display: none;"></div>
    }

    createBackground() {
        const elem = document.createElement("div")
        elem.setAttribute("id", this.ref)
        this.theme.split(" ").forEach((item)=> {
            elem.classList.add(item)
        })
        return elem
    }
    renderedCallback() {
        const {parentNode, createBackground,   loadParticles} = this
        parentNode.insertBefore(createBackground(), this)
        loadParticles()
    }
}

customElements.define('particles-background', ParticlesBackground);