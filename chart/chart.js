$(function () {
    loadData();
  });
  
  function loadData() {
    $.ajax({
      url: "dashboard/getData.php",
      type: "get",
      dataType: "json",
      success: function (data) {
        $("#total_pengguna").text(data.total_user);
        $("#jumlah_barang").text(data.total_barang);
        $("#total_masuk").text(data.total_masuk);
        $("#jumlah_keluar").text(data.total_keluar);
      },
      error: function (xhr, status, error) {
        console.error("Error:", error);
      },
    });
  }
  
  function toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    e.chart.render();
  }