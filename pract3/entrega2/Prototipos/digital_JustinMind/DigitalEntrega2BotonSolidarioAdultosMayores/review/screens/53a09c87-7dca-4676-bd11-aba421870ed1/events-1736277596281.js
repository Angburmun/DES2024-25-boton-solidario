jQuery("#simulation")
  .on("click", ".s-53a09c87-7dca-4676-bd11-aba421870ed1 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-53a09c87-7dca-4676-bd11-aba421870ed1 #shapewrapper-s-Ellipse_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(124,83,96,0.15)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-53a09c87-7dca-4676-bd11-aba421870ed1 #shapewrapper-s-Ellipse_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FDF7FF"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-53a09c87-7dca-4676-bd11-aba421870ed1 #shapewrapper-s-Ellipse_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(124,83,96,0.15)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-53a09c87-7dca-4676-bd11-aba421870ed1 #shapewrapper-s-Ellipse_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FDF7FF"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-53a09c87-7dca-4676-bd11-aba421870ed1 #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(124,83,96,0.15)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-53a09c87-7dca-4676-bd11-aba421870ed1 #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-53a09c87-7dca-4676-bd11-aba421870ed1 #shapewrapper-s-Ellipse_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(124,83,96,0.15)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-53a09c87-7dca-4676-bd11-aba421870ed1 #shapewrapper-s-Ellipse_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FDF7FF"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-53a09c87-7dca-4676-bd11-aba421870ed1 #shapewrapper-s-Ellipse_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(124,83,96,0.15)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-53a09c87-7dca-4676-bd11-aba421870ed1 #shapewrapper-s-Ellipse_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FDF7FF"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-53a09c87-7dca-4676-bd11-aba421870ed1 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(124,83,96,0.15)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-53a09c87-7dca-4676-bd11-aba421870ed1 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/36b3b1b4-355c-4804-901e-2005af0caf40"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/36b3b1b4-355c-4804-901e-2005af0caf40"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/80514093-5cc2-421c-a5bf-f5a2ec622e55"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5153fbc7-f8d5-4fed-8673-c0ac38b0b502"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/75fff242-18ea-46d5-8e16-6af106234e96"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8b97c94f-750a-473f-a6ce-cad67f6b50c3"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a3848334-1c09-4b63-914a-09fde30b6cc2"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-53a09c87-7dca-4676-bd11-aba421870ed1 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-53a09c87-7dca-4676-bd11-aba421870ed1 #s-Button_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#3E3E3E"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_15") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-53a09c87-7dca-4676-bd11-aba421870ed1 #s-Text_15 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_16") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-53a09c87-7dca-4676-bd11-aba421870ed1 #s-Text_16 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_17") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-53a09c87-7dca-4676-bd11-aba421870ed1 #s-Text_17 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_18") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-53a09c87-7dca-4676-bd11-aba421870ed1 #s-Text_18 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_19") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-53a09c87-7dca-4676-bd11-aba421870ed1 #s-Text_19 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-53a09c87-7dca-4676-bd11-aba421870ed1 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_3")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_15")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_16")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_17")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_18")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_19")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    }
  });