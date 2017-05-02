"use strict";

module.exports = function () {
  return function (h) {

    var items = [];

    this.pages.map(function (page) {
      items.push(h(
        "a",
        { "class": "pagination-link " + this.activeClass(page), attrs: { href: "javascript:void(0);"
          },
          on: {
            "click": this.setPage.bind(this, page)
          }
        },
        [page]
      ));
    }.bind(this));

    return h(
      "div",
      null,
      [h(
        "nav",
        { "class": "pagination " + this.modifiers },
        [h(
          "a",
          { "class": "pagination-previous", attrs: { disabled: this.pageLinkDisabled(this.page - 1), href: "javascript:void(0);"
            },
            on: {
              "click": this.prev.bind(this)
            }
          },
          ["<"]
        ), h(
          "a",
          { "class": "pagination-next", attrs: { disabled: this.pageLinkDisabled(this.page + 1), href: "javascript:void(0);"
            },
            on: {
              "click": this.next.bind(this)
            }
          },
          [">"]
        ), h(
          "ul",
          {
            directives: [{
              name: "show",
              value: this.totalPages > 1
            }],

            "class": "pagination-list" },
          [h(
            "li",
            null,
            [h(
              "a",
              { "class": "pagination-link", attrs: { disabled: this.chunkLinkDisabled(-1), href: "javascript:void(0);"
                },
                on: {
                  "click": this.setChunk.bind(this, -1)
                }
              },
              ["<<"]
            )]
          ), items, h(
            "li",
            null,
            [h(
              "a",
              { "class": "pagination-link", attrs: { disabled: this.chunkLinkDisabled(1), href: "javascript:void(0);"
                },
                on: {
                  "click": this.setChunk.bind(this, 1)
                }
              },
              [">>"]
            )]
          )]
        )]
      ), h(
        "p",
        {
          directives: [{
            name: "show",
            value: parseInt(this.records)
          }],
          "class": "has-text-centered" },
        [this.count]
      )]
    );
  };
};