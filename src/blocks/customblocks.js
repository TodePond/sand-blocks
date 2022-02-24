/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Define custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on defining blocks:
// https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks

import * as Blockly from "blockly/core";
import { elements } from "../Sand";
// Since we're using json to initialize the field, we'll need to import it.
import "../fields/BlocklyReactField";
import "../fields/DateField";

var testReactField = {
  type: "test_react_field",
  message0: "custom field %1",
  args0: [
    {
      type: "field_react_component",
      name: "FIELD",
      text: "Click me",
    },
  ],
  previousStatement: null,
  nextStatement: null,
};

Blockly.Blocks["test_react_field"] = {
  init: function () {
    this.jsonInit(testReactField);
    this.setStyle("loop_blocks");
  },
};

var reactDateField = {
  type: "test_react_date_field",
  message0: "date field %1",
  args0: [
    {
      type: "field_react_date",
      name: "DATE",
      date: "01/01/2020",
    },
  ],
  previousStatement: null,
  nextStatement: null,
};

Blockly.Blocks["test_react_date_field"] = {
  init: function () {
    this.jsonInit(reactDateField);
    this.setStyle("loop_blocks");
  },
};

Blockly.Blocks["element_dropdown"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("drop down:")
      .appendField(
        new Blockly.FieldDropdown(
          elements.map((name, i) => [name, i.toString()])
        ),
        "FIELDNAME"
      );
  },
};

Blockly.Blocks["sand_behavior_base"] = {
  init: function () {
    this.jsonInit({
      message0: "Behavior",
      message1: "%1",
      args1: [
        {
          type: "input_statement",
          name: "body",
          align: "CENTRE",
        },
      ],
      inputsInline: false,
      tooltip: "Behavior for the element",
      helpUrl: "",
    });
    this.setDeletable(false);
    this.setMovable(true);
    //this.setStyle("loop_blocks");
  },
};

Blockly.Blocks["get_cell"] = {
  init: function () {
    this.jsonInit({
      type: "get_cell",
      message0: "get cell: %1 %2",
      args0: [
        {
          type: "input_value",
          name: "x",
          check: "Number",
        },
        {
          type: "input_value",
          name: "y",
          check: "Number",
        },
      ],
      inputsInline: true,
      output: "Number",
      colour: 230,
      tooltip: "",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["set_cell"] = {
  init: function () {
    this.jsonInit({
      type: "set_cell",
      message0: "set cell%1 %2, %3",
      args0: [
        {
          type: "input_value",
          name: "x",
          check: "Number",
        },
        {
          type: "input_value",
          name: "y",
          check: "Number",
        },
        {
          type: "input_value",
          name: "cell",
          check: "Number",
        },
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: 270,
      tooltip: "",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["swap_cells"] = {
  init: function () {
    this.jsonInit({
      type: "swap_cells",
      message0: "swap cells %1 %2",
      args0: [
        {
          type: "input_value",
          name: "x",
          check: "Number",
        },
        {
          type: "input_value",
          name: "y",
          check: "Number",
        },
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: 270,
      tooltip: "",
      helpUrl: "",
    });
  },
};

//====================================

Blockly.Blocks["element_literal"] = {
  init: function () {
    this.jsonInit({
      type: "element_literal",
      output: "Number",
      message0: "%1",
      args0: [
        {
          type: "field_dropdown",
          name: "ELEMENT",
          options: elements.map((name, i) => [name, i.toString()]),
        }
      ],
    });
  },
};
