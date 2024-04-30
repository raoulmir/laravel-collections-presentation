import {remove, insert, CodeBlock} from '@motion-canvas/2d/lib/components/CodeBlock';

export class CodeSnippets {
    tariff() {
        return {
            chunk: {
                input: `$supplier->tariffs->chunk(4)->first();`,
                output: `
        => Illuminate\\Database\\Eloquent\\Collection {#3808
            all: [
                App\\Models\\Sales\\Tariff {#6539
                id: 5,
         name: "Basic Variable",
         supplier_id: 1,
         meta: "{"types":["variable"],"regulatory_start_date":"2023-01-01T00:00:00Z","regulatory_end_date":"2023-03-31T22:59:59Z","onsale_start_date":"2022-12-23T10:54:00Z","onsale_end_date":"2022-12-23T10:54:00Z"}",
         created_at: "2022-01-26 20:11:20",
         updated_at: "2023-05-30 09:52:49",
         batch: 1685436766,
         deleted_at: null,
       },
       App\\Models\\Sales\\Tariff {#6538
                id: 6,
         name: "Basic Variable Single Rate",
         supplier_id: 1,
         meta: "{"types":["variable"],"regulatory_start_date":"2023-01-01T00:00:00Z","regulatory_end_date":"2023-03-31T22:59:59Z","onsale_start_date":"2022-12-23T10:54:00Z","onsale_end_date":"2022-12-23T10:54:00Z"}",
         created_at: "2022-01-26 20:11:20",
         updated_at: "2023-05-30 09:52:49",
         batch: 1685436766,
         deleted_at: null,
       },
       App\\Models\\Sales\\Tariff {#6537
                id: 11,
         name: "Exclusive Fixed April 2023 B1",
         supplier_id: 1,
         meta: "{"types":["fixed","green"],"regulatory_start_date":"2021-11-02T08:00:00Z","regulatory_end_date":"2023-04-30T22:59:00Z","onsale_start_date":"2021-11-02T08:00:00Z","onsale_end_date":"2021-11-02T08:00:00Z"}",
         created_at: "2022-01-26 20:11:20",
         updated_at: "2023-05-30 09:52:49",
         batch: 1685436766,
         deleted_at: null,
       },
       App\\Models\\Sales\\Tariff {#6536
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
        `
            },

            pluck: {
                input: `$supplier->tariffs->chunk(4)->first()->pluck('name')`,
                output: `
         => Illuminate\\Support\\Collection {#3803
            all: [
                "Basic Variable",
                "Basic Variable Single Rate",
                "Exclusive Fixed April 2023 B1",
                "Exclusive Fixed Help Beat Cancer May 2023",
            ],
        }
        `
            },

            whereDate: {
                input: `App\\Models\\Sales\\Tariff::where('created_at', '>',  \\Carbon::createFromDate(2023, 05, 01))->get()->chunk(4)->first()`,
                output: `
        => Illuminate\\Database\\Eloquent\\Collection {#5582
        all: [
           App\\Models\\Sales\\Tariff {#5561
             id: 3600,
             name: "Better Together Aug25",
             supplier_id: 4,
             meta: "{"types":["fixed"],"regulatory_start_date":"2023-03-31T23:00:00Z","regulatory_end_date":"2025-08-31T22:59:00Z","onsale_start_date":"2023-03-31T13:36:00Z","onsale_end_date":"2023-03-31T13:36:00Z"}",
             created_at: "2023-05-30 09:53:00",
             updated_at: "2023-05-30 09:53:00",
             batch: 1685436766,
             deleted_at: null,
           },
           App\\Models\\Sales\\Tariff {#5560
             id: 3601,
             name: "Easy Online+BoilerCareGold Jun24v2",
             supplier_id: 4,
             meta: "{"types":["fixed"],"regulatory_start_date":"2022-09-30T23:00:00Z","regulatory_end_date":"2024-06-30T22:59:59Z","onsale_start_date":"2022-06-09T23:00:00Z","onsale_end_date":"2022-06-09T23:00:00Z"}",
             created_at: "2023-05-30 09:53:02",
             updated_at: "2023-05-30 09:53:03",
             batch: 1685436766,
             deleted_at: null,
           },
           App\\Models\\Sales\\Tariff {#5559
             id: 3602,
             name: "Fix Total Service Apr24v5",
             supplier_id: 4,
             meta: "{"types":["fixed"],"regulatory_start_date":"2022-09-30T23:00:00Z","regulatory_end_date":"2024-04-30T22:59:59Z","onsale_start_date":"2022-04-10T23:00:00Z","onsale_end_date":"2022-04-10T23:00:00Z"}",
             created_at: "2023-05-30 09:53:04",
             updated_at: "2023-05-30 09:53:04",
             batch: 1685436766,
             deleted_at: null,
           },
           App\\Models\\Sales\\Tariff {#5558
             id: 3603,
             name: "Fix Total Service Jun24v2",
             supplier_id: 4,
             meta: "{"types":["fixed"],"regulatory_start_date":"2022-09-30T23:00:00Z","regulatory_end_date":"2024-06-30T22:59:59Z","onsale_start_date":"2022-06-06T23:00:00Z","onsale_end_date":"2022-06-06T23:00:00Z"}",
             created_at: "2023-05-30 09:53:07",
             updated_at: "2023-05-30 09:53:07",
             batch: 1685436766,
             deleted_at: null,
           },
         ],
   }`
            }
        }
    };

    payloadBuilder() {
        return {
            original: {
                input: `
                if ($this->gasDetails && !$this->gasDetails->hasErrors()) {
                    $this->gasDetails = $this->gasDetails->get()->switchGasData[0];
                    $this->details['p_mprn1'] = $this->gasDetails->mprn;
                    $this->details['p_mprncount'] = '1';
                    $this->details['p_gasmeterserial1'] = $this->gasDetails->meterSerialNumber;
                }
            `
            },
            stepOne: {
                input: `
                if ($this->gasDetails && !$this->gasDetails->hasErrors()) {
                ${insert(`
                
                $gasDetails = collect([
                    'mprn' => null,
                    'meterSerialNumber' => null
                ]);`
                    
                )}
                $this->gasDetails = $this->gasDetails->get()->switchGasData[0];
                $this->details['p_mprn1'] = $this->gasDetails->mprn;
                $this->details['p_mprncount'] = '1';
                $this->details['p_gasmeterserial1'] = $this->gasDetails->meterSerialNumber;
            }
            `
            },
            stepTwo: {
                input: `
            if ($this->gasDetails && !$this->gasDetails->hasErrors()) {
            
                $gasDetails = collect([
                    'mprn' => null,
                    'meterSerialNumber' => null
                ]);
                
                $this->gasDetails = $this->gasDetails->get()->switchGasData[0];
                
                $gasFields = collect($this->gasDetails)->only($gasDetails->keys());
                
                $this->details['p_mprn1'] = $this->gasDetails->mprn;
                $this->details['p_mprncount'] = '1';
                $this->details['p_gasmeterserial1'] = $this->gasDetails->meterSerialNumber;
            }
            `
            },
            stepThree: {
                input: `
            if ($this->gasDetails && !$this->gasDetails->hasErrors()) {
            
                $gasDetails = collect([
                    'mprn' => null,
                    'meterSerialNumber' => null
                ]);
                
                $this->gasDetails = $this->gasDetails->get()->switchGasData[0];
                
                $gasFields = collect($this->gasDetails)->only($gasDetails->keys());
                
                $this->details = collect([
                    'p_mprn1',
                    'p_gasmeterserial1',
                    'p_mprncount'
                ])->combine($gasFields);
            }
            `
            }
        }
    }

}