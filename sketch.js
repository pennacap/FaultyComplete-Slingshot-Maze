const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var shooter;
var engine, world;
var ground
var carrierVNo1Part1, carrierVNo1Part2;
var carrierLineNo2
var blocks
var timer1;
var score
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
  var block11, block12, block13, block14, block15, block16, block17, block18, block19, block20;
  var block21, block22, block23, block24, block25, block26, block27, block28, block29, block30;
  var block31, block32, block33, block34, block35, block36, block37, block38, block39, block40;
  var block41, block42, block43, block44, block45, block46, block47, block48, block49, block50;
  var block51, block52, block53, block54, block55, block56, block57, block58, block59, block60;
  var block61, block62, block63, block64, block65, block66, block67, block68, block69, block70;
  var block71, block72, block73, block74, block75, block76, block77, block78, block79, block80;
  var block81, block82, block83, block84, block85, block86, block87, block88, block89, block90;
  var block91, block92, block93, block94, block95, block96, block97, block98, block99, block100;
  var scoredown
  function setup() {
  createCanvas(1600,400);
  engine = Engine.create();
  world = engine.world;
  shooter = new Hexagon();
  score = 300000;
  scoredown = true;
  slingshot = new SlingShot(shooter.body, {x:100, y:300});
  carrierVNo1Part1 = new Carrier(700, 200, 100, 10,45);
  carrierVNo1Part2 = new Carrier(760, 200, 100, 10,135);
  carrierLineNo2 = new Carrier(350, 200, 200, 10, 0);
  block1 = new Block();
  block2 = new Block();
  block3 = new Block();
  block4 = new Block();
  block5 = new Block();
  block6 = new Block();
  block7 = new Block();
  block8 = new Block();
  block9 = new Block();
  block10 = new Block();
  block11 = new Block();
  block12 = new Block();
  block13 = new Block();
  block14 = new Block();
  block15 = new Block();
  block16 = new Block();
  block17 = new Block();
  block18 = new Block();
  block19 = new Block();
  block20 = new Block();
  block21 = new Block();
  block22 = new Block();
  block23 = new Block();
  block24 = new Block();
  block25 = new Block();
  block26 = new Block();
  block27 = new Block();
  block28 = new Block();
  block29 = new Block();
  block30 = new Block();
  block31 = new Block();
  block32 = new Block();
  block33 = new Block();
  block34 = new Block();
  block35 = new Block();
  block36 = new Block();
  block37 = new Block();
  block38 = new Block();
  block39 = new Block();
  block40 = new Block();
  block41 = new Block();
  block42 = new Block();
  block43 = new Block();
  block44 = new Block();
  block45 = new Block();
  block46 = new Block();
  block47 = new Block();
  block48 = new Block();
  block49 = new Block();
  block50 = new Block();
  block51 = new Block();
  block52 = new Block();
  block53 = new Block();
  block54 = new Block();
  block55 = new Block();
  block56 = new Block();
  block57 = new Block();
  block58 = new Block();
  block59 = new Block();
  block50 = new Block();
  block51 = new Block();
  block52 = new Block();
  block53 = new Block();
  block54 = new Block();
  block55 = new Block();
  block56 = new Block();
  block57 = new Block();
  block58 = new Block();
  block59 = new Block();
  block60 = new Block();
  block61 = new Block();
  block62 = new Block();
  block63 = new Block();
  block64 = new Block();
  block65 = new Block();
  block66 = new Block();
  block67 = new Block();
  block68 = new Block();
  block69 = new Block();
  block70 = new Block();
  block71 = new Block();
  block72 = new Block();
  block73 = new Block();
  block74 = new Block();
  block75 = new Block();
  block76 = new Block();
  block77 = new Block();
  block78 = new Block();
  block79 = new Block();
  block80 = new Block();
  block81 = new Block();
  block82 = new Block();
  block83 = new Block();
  block84 = new Block();
  block85 = new Block();
  block86 = new Block();
  block87 = new Block();
  block88 = new Block();
  block89 = new Block();
  block90 = new Block();
  block91 = new Block();
  block91 = new Block();
  block92 = new Block();
  block93 = new Block();
  block94 = new Block();
  block95 = new Block();
  block96 = new Block();
  block97 = new Block();
  block98 = new Block();
  block99 = new Block();
  block100 = new Block();
  
  // block11, block12, block13, block14, block15, block16, block17, block18, block19, block20 = new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block();
  // block21, block22, block23, block24, block25, block26, block27, block28, block29, block30 = new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block();
  // block31, block32, block33, block34, block35, block36, block37, block38, block39, block40 = new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block();
  //  block41, block42, block43, block44, block45, block46, block47, block48, block49, block50 = new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block();
  //  block51, block52, block53, block54, block55, block56, block57, block58, block59, block60 = new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block();
  //  block61, block62, block63, block64, block65, block66, block67, block68, block69, block70 = new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block();
  // block71, block72, block73, block74, block75, block76, block77, block78, block79, block80 = new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block();
  //  block81, block82, block83, block84, block85, block86, block87, block88, block89, block90 = new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block();
  //  block91, block92, block93, block94, block95, block96, block97, block98, block99, block100 = new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block();
  blocks = []
  ground = new Carrier(800, 405, 1600, 10, 0);
}

function draw() {
  
  background(50, 0, 50);
  Engine.update(engine);
 //score = 360000-millis();
  if (score != 0 && scoredown) {
    score = 300000-millis(); 
  } 
  if (score == 0) {
    push()
    stroke(255)
    textSize(30)
    text("Game Over!", 800, 200);
    pop();
  }
  carrierVNo1Part1.display(); 
  carrierVNo1Part2.display(); 
  carrierLineNo2.display(); 
  shooter.display();
  slingshot.display();
  block1.display();
  //console.log(block1.body.speed)
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();
  block41.display();
  block42.display();
  block43.display();
  block44.display();
  block45.display();
  block46.display();
  block47.display();
  block48.display();
  block49.display();
  block50.display();
  block51.display();
  block52.display();
  block53.display();
  block54.display();
  block55.display();
  block56.display();
  block57.display();
  block58.display();
  block59.display();
  block60.display();
  block61.display();
  block62.display();
  block63.display();
  block64.display();
  block65.display();
  block66.display();
  block67.display();
  block68.display();
  block69.display();
  block70.display();
  block71.display();
  block72.display();
  block73.display();
  block74.display();
  block75.display();
  block76.display();
  block77.display();
  block78.display();
  block79.display();
  block80.display();
  block81.display();
  block82.display();
  block83.display();
  block84.display();
  block85.display();
  block86.display();
  block87.display();
  block88.display();
  block89.display();
  block90.display();
  block91.display();
  block92.display();
  block93.display();
  block94.display();
  block95.display();
  block96.display();
  block97.display();
  block98.display();
  block99.display();
  block100.display();
  if (!block1.dispay) {
    if (!block2.dispay) {
      if (!block3.dispay) {
        if (!block4.dispay) {
          if (!block5.dispay) {
            if (!block6.dispay) {
              if (!block7.dispay) {
                if (!block8.dispay) {
                  if (!block9.dispay) {
                    if (!block10.dispay) {
                      if (!block11.dispay) {
                        if (!block12.dispay) {
                          if (!block13.dispay) {
                            if (!block14.dispay) {
                              if (!block15.dispay) {
                                if (!block16.dispay) {
                                  if (!block17.dispay) {
                                    if (!block18.dispay) {
                                      if (!block19.dispay) {
                                        if (!block20.dispay) {
                                          if (!block21.dispay) {
                                            if (!block22.dispay) {
                                              if (!block23.dispay) {
                                                if (!block24.dispay) {
                                                  if (!block25.dispay) {
                                                    if (!block26.dispay) {
                                                      if (!block27.dispay) {
                                                        if (!block28.dispay) {
                                                          if (!block29.dispay) {
                                                            if (!block30.dispay) {
                                                              if (!block31.dispay) {
                                                                if (!block32.dispay) {
                                                                  if (!block33.dispay) {
                                                                    if (!block34.dispay) {
                                                                      if (!block35.dispay) {
                                                                        if (!block36.dispay) {
                                                                          if (!block37.dispay) {
                                                                            if (!block38.dispay) {
                                                                              if (!block39.dispay) {
                                                                                if (!block40.dispay) {
                                                                                  if (!block41.dispay) {
                                                                                    if (!block42.dispay) {
                                                                                      if (!block43.dispay) {
                                                                                        if (!block44.dispay) {
                                                                                          if (!block45.dispay) {
                                                                                            if (!block46.dispay) {
                                                                                              if (!block47.dispay) {
                                                                                                if (!block48.dispay) {
                                                                                                  if (!block49.dispay) {
                                                                                                    if (!block50.dispay) {
                                                                                                      if (!block51.dispay) {
                                                                                                        if (!block52.dispay) {
                                                                                                          if (!block53.dispay) {
                                                                                                            if (!block54.dispay) {
                                                                                                              if (!block55.dispay) {
                                                                                                                if (!block56.dispay) {
                                                                                                                  if (!block57.dispay) {
                                                                                                                    if (!block58.dispay) {
                                                                                                                      if (!block59.dispay) {
                                                                                                                        if (!block60.dispay) {
                                                                                                                          if (!block61.dispay) {
                                                                                                                            if (!block62.dispay) {
                                                                                                                              if (!block63.dispay) {
                                                                                                                                if (!block64.dispay) {
                                                                                                                                  if (!block65.dispay) {
                                                                                                                                    if (!block66.dispay) {
                                                                                                                                      if (!block67.dispay) {
                                                                                                                                        if (!block68.dispay) {
                                                                                                                                          if (!block69.dispay) {
                                                                                                                                            if (!block70.dispay) {
                                                                                                                                              if (!block71.dispay) {
                                                                                                                                                if (!block72.dispay) {
                                                                                                                                                  if (!block73.dispay) {
                                                                                                                                                    if (!block74.dispay) {
                                                                                                                                                      if (!block75.dispay) {
                                                                                                                                                        if (!block76.dispay) {
                                                                                                                                                          if (!block77.dispay) {
                                                                                                                                                            if (!block78.dispay) {
                                                                                                                                                              if (!block79.dispay) {
                                                                                                                                                                if (!block80.dispay) {
                                                                                                                                                                  if (!block61.dispay) {
                                                                                                                                                                    if (!block62.dispay) {
                                                                                                                                                                      if (!block63.dispay) {
                                                                                                                                                                        if (!block64.dispay) {
                                                                                                                                                                          if (!block65.dispay) {
                                                                                                                                                                            if (!block66.dispay) {
                                                                                                                                                                              if (!block67.dispay) {
                                                                                                                                                                                if (!block68.dispay) {
                                                                                                                                                                                  if (!block69.dispay) {
                                                                                                                                                                                    if (!block70.dispay) {
                                                                                                                                                                                      if (!block71.dispay) {
                                                                                                                                                                                        if (!block72.dispay) {
                                                                                                                                                                                          if (!block73.dispay) {
                                                                                                                                                                                            if (!block74.dispay) {
                                                                                                                                                                                              if (!block75.dispay) {
                                                                                                                                                                                                if (!block76.dispay) {
                                                                                                                                                                                                  if (!block77.dispay) {
                                                                                                                                                                                                    if (!block78.dispay) {
                                                                                                                                                                                                      if (!block79.dispay) {
                                                                                                                                                                                                        if (!block80.dispay) {
                                                                                                                                                                                                          if (!block81.dispay) {
                                                                                                                                                                                                            if (!block82.dispay) {
                                                                                                                                                                                                              if (!block83.dispay) {
                                                                                                                                                                                                                if (!block84.dispay) {
                                                                                                                                                                                                                  if (!block85.dispay) {
                                                                                                                                                                                                                    if (!block86.dispay) {
                                                                                                                                                                                                                      if (!block87.dispay) {
                                                                                                                                                                                                                        if (!block88.dispay) {
                                                                                                                                                                                                                          if (!block89.dispay) {
                                                                                                                                                                                                                            if (!block90.dispay) {
                                                                                                                                                                                                                              if (!block91.dispay) {
                                                                                                                                                                                                                                if (!block92.dispay) {
                                                                                                                                                                                                                                  if (!block93.dispay) {
                                                                                                                                                                                                                                    if (!block94.dispay) {
                                                                                                                                                                                                                                      if (!block95.dispay) {
                                                                                                                                                                                                                                        if (!block96.dispay) {
                                                                                                                                                                                                                                          if (!block97.dispay) {
                                                                                                                                                                                                                                            if (!block98.dispay) {
                                                                                                                                                                                                                                              if (!block99.dispay) {
                                                                                                                                                                                                                                                if (!block100.dispay) {
                                                                                                                                                                                                                                                  push();
                                                                                                                                                                                                                                                  stroke(255);
                                                                                                                                                                                                                                                  textSize(30)
                                                                                                                                                                                                                                                  text("Congrats", 800, 200);
                                                                                                                                                                                                                                                  pop();
                                                                                                                                                                                                                                                  scoredown=false;
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                              }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                }
                                                                                                                                                                                                              }
                                                                                                                                                                                                            }
                                                                                                                                                                                                          }
                                                                                                                                                                                                        }
                                                                                                                                                                                                      }
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  //drawSprites();
  text(score, 1200, 100)
}

function mouseDragged() {
  Matter.Body.setPosition(shooter.body, {x: mouseX , y: mouseY}); 
}
function mouseReleased() {
  slingshot.fly()
}
function keyPressed() {
  if (keyCode == 32) {
    shooter.body.position.x = 100;
    shooter.body.position.y = 300;
    slingshot.attach(shooter.body);
  }
}