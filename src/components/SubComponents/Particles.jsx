import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const ParticlesBG = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  return (
    // <Particles
    //         id="tsparticles"
    //         init={particlesInit}
    //         loaded={particlesLoaded}
    //         options={{
    //             "fullScreen": {
    //                 "enable": true,
    //                 "zIndex": 0
    //             },
    //             "fpsLimit": 120,
    //             "particles": {
    //                 "number": {
    //                     "value": 80,
    //                     "density": {
    //                         "enable": true
    //                     }
    //                 },
    //                 "color": {
    //                     "value": "#ffffff"
    //                 },
    //                 "shape": {
    //                     "type": "polygon",
    //                     "stroke": {
    //                         "width": 0,
    //                         "color": "#000000"
    //                     },
    //                     "polygon": [
    //                         {
    //                             "nb_sides": 3,
    //                             "particles": {
    //                                 "opacity": {
    //                                     "value": 0.8,
    //                                     "random": {
    //                                         "enable": true,
    //                                         "minimumValue": 0.5
    //                                     }
    //                                 },
    //                                 "size": {
    //                                     "value": 12,
    //                                     "random": {
    //                                         "enable": true,
    //                                         "minimumValue": 10
    //                                     }
    //                                 },
    //                                 "color": {
    //                                     "value": "#3ca0b9"
    //                                 }
    //                             }
    //                         },
    //                         {
    //                             "nb_sides": 5,
    //                             "particles": {
    //                                 "opacity": {
    //                                     "value": 0.7
    //                                 },
    //                                 "size": {
    //                                     "value": 4,
    //                                     "random": {
    //                                         "enable": false
    //                                     }
    //                                 },
    //                                 "color": {
    //                                     "value": "#00293A"
    //                                 }
    //                             }
    //                         },
    //                         {
    //                             "nb_sides": 8,
    //                             "particles": {
    //                                 "opacity": {
    //                                     "value": 1,
    //                                     "random": false
    //                                 },
    //                                 "size": {
    //                                     "value": 12,
    //                                     "random": {
    //                                         "enable": true,
    //                                         "minimumValue": 8
    //                                     }
    //                                 },
    //                                 "color": {
    //                                     "value": "#e33762"
    //                                 }
    //                             }
    //                         }
    //                     ]
    //                 },
    //                 "opacity": {
    //                     "value": 0.5,
    //                     "random": false,
    //                     "anim": {
    //                         "enable": false,
    //                         "speed": 1,
    //                         "opacity_min": 0.1,
    //                         "sync": false
    //                     }
    //                 },
    //                 "size": {
    //                     "value": 5,
    //                     "random": true,
    //                     "anim": {
    //                         "enable": false,
    //                         "speed": 40,
    //                         "size_min": 0.1,
    //                         "sync": false
    //                     }
    //                 },
    //                 "line_linked": {
    //                     "enable": true,
    //                     "distance": 150,
    //                     "color": "#d6d6d6",
    //                     "opacity": 0.4,
    //                     "width": 1
    //                 },
    //                 "move": {
    //                     "enable": true,
    //                     "speed": 2,
    //                     "direction": "none",
    //                     "random": false,
    //                     "straight": false,
    //                     "out_mode": "out",
    //                     "attract": {
    //                         "enable": false,
    //                         "rotateX": 600,
    //                         "rotateY": 1200
    //                     }
    //                 }
    //             },
    //             "interactivity": {
    //                 "events": {
    //                     "onhover": {
    //                         "enable": true,
    //                         "mode": "bubble",
    //                         "parallax": {
    //                             "enable": false,
    //                             "force": 60,
    //                             "smooth": 10
    //                         }
    //                     },
    //                     "onclick": {
    //                         "enable": true,
    //                         "mode": "push"
    //                     },
    //                     "resize": true
    //                 },
    //                 "modes": {
    //                     "grab": {
    //                         "distance": 400,
    //                         "line_linked": {
    //                             "opacity": 1
    //                         }
    //                     },
    //                     "bubble": {
    //                         "distance": 400,
    //                         "size": 40,
    //                         "duration": 2,
    //                         "opacity": 0.8,
    //                         "speed": 3
    //                     },
    //                     "repulse": {
    //                         "distance": 200
    //                     },
    //                     "push": {
    //                         "particles_nb": 4
    //                     },
    //                     "remove": {
    //                         "particles_nb": 2
    //                     }
    //                 }
    //             },
    //             "retina_detect": false,
    //             "background": {
    //                 "color": "#0d47a1",
    //                 "color": "#fff",
    //                 "image": "",
    //                 "position": "50% 50%",
    //                 "repeat": "no-repeat",
    //                 "size": "cover"
    //             }
    //         }}
    //     /> 
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            "fullScreen": {
                "zIndex": 0
            },
            "interactivity": {
                "events": {
                    "onClick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "onDiv": {
                        "elementId": "repulse-div",
                        "enable": false,
                        "mode": "repulse"
                    },
                    "onHover": {
                        "enable": true,
                        "mode": "repulse",
                        "parallax": {
                            "enable": false,
                            "force": 60,
                            "smooth": 10
                        }
                    },
                    "resize": true
                },
                "modes": {
                    "bubble": {
                        "distance": 400,
                        "duration": 2,
                        "opacity": 0.8,
                        "size": 40
                    },
                    "connect": {
                        "distance": 80,
                        "lineLinked": {
                            "opacity": 0.5
                        },
                        "radius": 60
                    },
                    "grab": {
                        "distance": 400,
                        "lineLinked": {
                            "opacity": 1
                        }
                    },
                    "push": {
                        "quantity": 5
                    },
                    "remove": {
                        "quantity": 2
                    },
                    "repulse": {
                        "distance": 100,
                        "duration": 0.4
                    },
                    "slow": {
                        "active": false,
                        "factor": 1,
                        "radius": 0
                    }
                }
            },
            "particles": {
                "color": {
                    "value": "#00293A"
                },
                "lineLinked": {
                    "blink": false,
                    "color": "#028D93",
                    "consent": false,
                    "distance": 150,
                    "enable": true,
                    "opacity": 0.4,
                    "shadow": {
                        "blur": 5,
                        "color": "lime",
                        "enable": false
                    },
                    "width": 1
                },
                "move": {
                    "attract": {
                        "enable": false,
                        "rotate": {
                            "x": 600,
                            "y": 1200
                        }
                    },
                    "collisions": false,
                    "direction": "none",
                    "enable": true,
                    "outMode": "out",
                    "random": false,
                    "speed": 2,
                    "straight": false,
                    "trail": {
                        "enable": false,
                        "length": 10,
                        "fillColor": "#00293A"
                    }
                },
                "number": {
                    "density": {
                        "enable": true
                    },
                    "limit": 0,
                    "value": 330
                },
                "opacity": {
                    "animation": {
                        "enable": true,
                        "minimumValue": 0.1,
                        "speed": 1,
                        "sync": false
                    },
                    "random": false,
                    "value": 0.5
                },
                "rotate": {
                    "animation": {
                        "enable": false,
                        "speed": 0,
                        "sync": false
                    },
                    "direction": "clockwise",
                    "random": false,
                    "value": 0
                },
                "shape": {
                    "character": ["."
                        // {
                        //     "fill": true,
                        //     "font": "Font Awesome 5 Brands",
                        //     "style": "",
                        //     "value": ["\uf179"],
                        //     "weight": "400"
                        // },
                        // {
                        //     "fill": true,
                        //     "font": "Font Awesome 5 Free",
                        //     "style": "",
                        //     "value": ["\uf5d1"],
                        //     "weight": "900"
                        // }
                    ],
                    "image": {
                        "height": 100,
                        "replaceColor": true,
                        "src": "https://particles.js.org/images/github.svg",
                        "width": 100
                    },
                    "polygon": {
                        "sides": 5
                    },
                    "stroke": {
                        "color": "#00293A",
                        "width": 1
                    },
                    "type": "char"
                },
                "size": {
                    "animation": {
                        "enable": false,
                        "minimumValue": 10,
                        "speed": 10,
                        "sync": false
                    },
                    "random": false,
                    "value": 16
                }
            },
            "polygon": {
                "draw": {
                    "enable": false,
                    "stroke": {
                        "color": "#00293A",
                        "width": 0.5
                    }
                },
                "enable": false,
                "inline": {
                    "arrangement": "one-per-point"
                },
                "move": {
                    "radius": 10,
                    "type": "path"
                },
                "scale": 1,
                "type": "none",
                "url": ""
            },
            "backgroundMask": {
                "enable": false
            },
            "pauseOnBlur": true,
            "background": {
                "color": "#ffffff",
                "image": "",
                "position": "50% 50%",
                "repeat": "no-repeat",
                "size": "cover"
            }
        }}
    />
  )
}

export default ParticlesBG