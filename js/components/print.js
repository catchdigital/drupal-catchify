const ATTR = {
  ELEMENT: 'data-print'
};

const SELECTOR = {
  ELEMENT: `[${ATTR.ELEMENT}]`
};

export default $ => {
  const $selement = $(SELECTOR.ELEMENT);

  if (!$selement.length) {
    return;
  }

  const printWindow = e => {
    e.preventDefault();
    window.print();
  };

  $selement.on('click', e => printWindow(e));
};
