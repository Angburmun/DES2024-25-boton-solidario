jQuery("#simulation")
  .on("click", ".s-5d377116-6f79-4c26-a8a1-3dc269112d64 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-5d377116-6f79-4c26-a8a1-3dc269112d64")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0b0b7a63-8cf8-4061-bcf4-b06e63dc8613"
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
    } else if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-5d377116-6f79-4c26-a8a1-3dc269112d64 #s-Rectangle_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DACBF3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-5d377116-6f79-4c26-a8a1-3dc269112d64 #s-Rectangle_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EADDFF"
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
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-5d377116-6f79-4c26-a8a1-3dc269112d64 #s-Rectangle_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DACBF3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-5d377116-6f79-4c26-a8a1-3dc269112d64 #s-Rectangle_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EADDFF"
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
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-5d377116-6f79-4c26-a8a1-3dc269112d64 #s-Rectangle_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DACBF3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-5d377116-6f79-4c26-a8a1-3dc269112d64 #s-Rectangle_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EADDFF"
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
                    "target": [ "#s-5d377116-6f79-4c26-a8a1-3dc269112d64 #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(103,80,164,0.08)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-5d377116-6f79-4c26-a8a1-3dc269112d64 #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(255,255,255,0.0)"
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
                    "target": [ "#s-5d377116-6f79-4c26-a8a1-3dc269112d64 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(103,80,164,0.08)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-5d377116-6f79-4c26-a8a1-3dc269112d64 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(255,255,255,0.0)"
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
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Ellipse_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Ellipse_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "timed",
                  "delay": 100
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#s-Date_1" ]
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
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-5d377116-6f79-4c26-a8a1-3dc269112d64 #s-Button_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#725DAB"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-5d377116-6f79-4c26-a8a1-3dc269112d64 #s-Button_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#6750A4"
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
    } else if(jFirer.is("#s-Button_4")) {
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
    } else if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0b0b7a63-8cf8-4061-bcf4-b06e63dc8613"
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
    } else if(jFirer.is("#s-Cell_17")) {
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
    } else if(jFirer.is("#s-Text_8")) {
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
    } else if(jFirer.is("#s-Cell_18")) {
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
    } else if(jFirer.is("#s-Cell_19")) {
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
    } else if(jFirer.is("#s-Cell_20")) {
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
    } else if(jFirer.is("#s-Cell_21")) {
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
    } else if(jFirer.is("#s-Path_13")) {
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
  .on("focusin", ".s-5d377116-6f79-4c26-a8a1-3dc269112d64 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Date_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_1" ]
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
  .on("focusout", ".s-5d377116-6f79-4c26-a8a1-3dc269112d64 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Date_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Date_1",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_1" ]
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
  .on("mouseenter dragenter", ".s-5d377116-6f79-4c26-a8a1-3dc269112d64 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-5d377116-6f79-4c26-a8a1-3dc269112d64 #s-Button_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
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
    } else if(jFirer.is("#s-Button_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-5d377116-6f79-4c26-a8a1-3dc269112d64 #s-Button_5 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
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
    } else if(jFirer.is("#s-Text_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-5d377116-6f79-4c26-a8a1-3dc269112d64 #s-Text_8 span" ],
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
    } else if(jFirer.is("#s-Text_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-5d377116-6f79-4c26-a8a1-3dc269112d64 #s-Text_9 span" ],
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
    } else if(jFirer.is("#s-Text_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-5d377116-6f79-4c26-a8a1-3dc269112d64 #s-Text_10 span" ],
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
    } else if(jFirer.is("#s-Text_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-5d377116-6f79-4c26-a8a1-3dc269112d64 #s-Text_11 span" ],
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
    } else if(jFirer.is("#s-Text_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-5d377116-6f79-4c26-a8a1-3dc269112d64 #s-Text_12 span" ],
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
  .on("mouseleave dragleave", ".s-5d377116-6f79-4c26-a8a1-3dc269112d64 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_4")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_5")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_8")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_9")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_10")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_11")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_12")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    }
  });