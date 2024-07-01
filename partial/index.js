window.onload = function () {
    // Buat fungsi untuk memuat data dari server PHP
    function getDataFromServer(callback) {
      // Ganti dengan URL yang sesuai ke endpoint getData.php di server Anda
      var url = 'report/getData2.php';
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = function () {
        if (xhr.status === 200) {
          var data = JSON.parse(xhr.responseText);
          callback(data);
        } else {
          console.error("Gagal memuat data dari server");
        }
      };
      xhr.send();
    }
  
    // Fungsi untuk membangun chart berdasarkan data yang diterima
    function buildChart(data) {
      var chart = new CanvasJS.Chart("chartContainer", {
        exportEnabled: true,
        animationEnabled: true,
        title: {
          text: "Monitoring Stok Barang",
        },
        subtitles: [
          {
            text: "Sistem Persediaan Barang - Prodi SI UNPAM",
          },
        ],
        axisX: {
          title: "List Barang",
        },
        axisY: {
          title: "Total Barang Masuk",
          titleFontColor: "#4F81BC",
          lineColor: "#4F81BC",
          labelFontColor: "#4F81BC",
          tickColor: "#4F81BC",
          includeZero: true,
        },
        axisY2: {
          title: "Total Barang Keluar",
          titleFontColor: "#C0504E",
          lineColor: "#C0504E",
          labelFontColor: "#C0504E",
          tickColor: "#C0504E",
          includeZero: true,
        },
        toolTip: {
          shared: true,
        },
        legend: {
          cursor: "pointer",
          itemclick: toggleDataSeries,
        },
        data: [
          {
            type: "column",
            name: "Barang Masuk",
            showInLegend: true,
            yValueFormatString: "#,##0.# Units",
            dataPoints: data.map(function (item) {
              return {
                label: item.nama_brg,
                y: parseInt(item.jml_masuk),
              };
            }),
          },
          {
            type: "column",
            name: "Barang Keluar",
            axisYType: "secondary",
            showInLegend: true,
            yValueFormatString: "#,##0.# Units",
            dataPoints: data.map(function (item) {
              return {
                label: item.nama_brg,
                y: parseInt(item.jml_keluar),
              };
            }),
          },
          {
            type: "column",
            name: "Stok Barang",
            axisYType: "secondary",
            showInLegend: true,
            yValueFormatString: "#,##0.# Units",
            dataPoints: data.map(function (item) {
              return {
                label: item.nama_brg,
                y: parseInt(item.actual_stock),
              };
            }),
          },
        ],
      });
      chart.render();
  
      function toggleDataSeries(e) {
        if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        e.chart.render();
      }
    }
  
    // Panggil fungsi untuk memuat data dari server dan membangun chart
    getDataFromServer(buildChart);
  };