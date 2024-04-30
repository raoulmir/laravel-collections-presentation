<?php

class codeSnippets
{

    function get() {
        $supplier->tariffs->chunk(4)->first();

        => Illuminate\Database\Eloquent\Collection {#3808
            all: [
                App\Models\Sales\Tariff {#6539
                id: 5,
         name: "Basic Variable",
         supplier_id: 1,
         meta: "{"types":["variable"],"regulatory_start_date":"2023-01-01T00:00:00Z","regulatory_end_date":"2023-03-31T22:59:59Z","onsale_start_date":"2022-12-23T10:54:00Z","onsale_end_date":"2022-12-23T10:54:00Z"}",
         created_at: "2022-01-26 20:11:20",
         updated_at: "2023-05-30 09:52:49",
         batch: 1685436766,
         deleted_at: null,
       },
       App\Models\Sales\Tariff {#6538
                id: 6,
         name: "Basic Variable Single Rate",
         supplier_id: 1,
         meta: "{"types":["variable"],"regulatory_start_date":"2023-01-01T00:00:00Z","regulatory_end_date":"2023-03-31T22:59:59Z","onsale_start_date":"2022-12-23T10:54:00Z","onsale_end_date":"2022-12-23T10:54:00Z"}",
         created_at: "2022-01-26 20:11:20",
         updated_at: "2023-05-30 09:52:49",
         batch: 1685436766,
         deleted_at: null,
       },
       App\Models\Sales\Tariff {#6537
                id: 11,
         name: "Exclusive Fixed April 2023 B1",
         supplier_id: 1,
         meta: "{"types":["fixed","green"],"regulatory_start_date":"2021-11-02T08:00:00Z","regulatory_end_date":"2023-04-30T22:59:00Z","onsale_start_date":"2021-11-02T08:00:00Z","onsale_end_date":"2021-11-02T08:00:00Z"}",
         created_at: "2022-01-26 20:11:20",
         updated_at: "2023-05-30 09:52:49",
         batch: 1685436766,
         deleted_at: null,
       },
       App\Models\Sales\Tariff {#6536
                id: 14,
         name: "Exclusive Fixed Help Beat Cancer May 2023",
         supplier_id: 1,
         meta: "{"types":["fixed"],"regulatory_start_date":"2020-12-10T10:00:00Z","regulatory_end_date":"2023-05-31T22:59:00Z","onsale_start_date":"2020-12-10T10:00:00Z","onsale_end_date":"2020-12-10T10:00:00Z"}",
         created_at: "2022-01-26 20:11:21",
         updated_at: "2023-05-30 09:52:49",
         batch: 1685436766,
         deleted_at: null,
       },
     ],
   }
    }
}