import 'particles.js'

const data = {
    "particles": {
        "number": {
            "value": 200,
            "density": {
                "enable": true,
                "value_area": 325
            }
        },
        "color": {
            "value": "#33691e"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "top",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    
    "interactivity": {
            events: {
                onhover: {
                    enable: false,
                    mode: []
                },
                resize: true
            }
        },
    "retina_detect": true
}

function ParticleLab() {
    particlesJS(this.ref, data)
}

export default ParticleLab