if (document.getElementById('products-list')) {
  const dataTableSearch = new simpleDatatables.DataTable("#products-list", {
    searchable: true,
    fixedHeight: false,
    perPage: 5
  });


  document.querySelectorAll(".export").forEach(function (el) {
    el.addEventListener("click", function (e) {
      var type = el.dataset.type;

      var data = {
        type: type,
        filename: "soft-ui-" + type,
      };

      if (type === "csv") {
        data.columnDelimiter = "|";
      }

      dataTableSearch.export(data);
    });
  });
};




if (document.getElementById('global-users')) {
  const dataTableSearch = new simpleDatatables.DataTable("#global-users", {
    searchable: true,
    fixedHeight: false,
    perPage: 5
  });


  document.querySelectorAll(".export").forEach(function (el) {
    el.addEventListener("click", function (e) {
      var type = el.dataset.type;

      var data = {
        type: type,
        filename: "soft-ui-" + type,
      };

      if (type === "csv") {
        data.columnDelimiter = "|";
      }

      dataTableSearch.export(data);
    });
  });
};




if (document.getElementById('edit-deschiption')) {
  var quill = new Quill('#edit-deschiption', {
    theme: 'snow' // Specify theme in configuration
  });
};

if (document.getElementById('choices-category')) {
  var element = document.getElementById('choices-category');
  const example = new Choices(element, {
    searchEnabled: false
  });
};

if (document.getElementById('ecomm-choices-sub-category')) {
  var element = document.getElementById('ecomm-choices-sub-category');
  const example = new Choices(element, {
    searchEnabled: false
  });
};
if (document.getElementById('ecomm-choices-child-category')) {
  var element = document.getElementById('ecomm-choices-child-category');
  const example = new Choices(element, {
    searchEnabled: false
  });
};

if (document.getElementById('choices-sizes')) {
  var element = document.getElementById('choices-sizes');
  const example = new Choices(element, {
    searchEnabled: false
  });
};

if (document.getElementById('choices-currency')) {
  var element = document.getElementById('choices-currency');
  const example = new Choices(element, {
    searchEnabled: false
  });
};
if (document.getElementById('choices-games')) {
  var element = document.getElementById('choices-games');
  const example = new Choices(element, {
    searchEnabled: false
  });
};
if (document.getElementById('choices-fashion')) {
  var element = document.getElementById('choices-fashion');
  const example = new Choices(element, {
    searchEnabled: false
  });
};
if (document.getElementById('choices-language')) {
  var element = document.getElementById('choices-language');
  const example = new Choices(element, {
    searchEnabled: false
  });
};

if (document.getElementById('choices-tags')) {
  var tags = document.getElementById('choices-tags');
  const examples = new Choices(tags, {
    removeItemButton: true
  });

  examples.setChoices(
    [{
      value: 'One',
      label: 'Expired',
      disabled: true
    },
    {
      value: 'Two',
      label: 'Out of Stock',
      selected: true
    }
    ],
    'value',
    'label',
    false,
  );
}

