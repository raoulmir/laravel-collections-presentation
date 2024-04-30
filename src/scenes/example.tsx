import {makeScene2D, Rect, Txt} from '@motion-canvas/2d';
import {all, beginSlide, createRef, DEFAULT, map, tween, waitFor} from '@motion-canvas/core';
import {CodeBlock, edit, insert, lines, range, remove} from '@motion-canvas/2d/lib/components/CodeBlock';

export default makeScene2D(function* (view) {
    const title = createRef<Txt>();
    view.add(<Txt ref={title} />);
    view.fill('#171923')

    const codeRef = createRef<CodeBlock>();
    const jsonRef = createRef<CodeBlock>();



    yield* beginSlide('Code');
    yield* view.add(
        <Rect direction={'column'} gap={40} layout>
            <CodeBlock
                fontSize={25}
                ref={codeRef}
                language="js"
                code={
                    `
                    if ($response && !$response->hasErrors()) {
                        $response = $response->get()->switchGasData[0];
                        $this->details['p_mprn1'] = $response->mprn;
                        $this->details['p_gasmeterserial1'] = $response->meterSerialNumber;
                        $this->details['p_mprncount'] = '1';
                        
                    }`
                }
            />
            <Rect fill={'#292D3E'} radius={20} padding={20} direction={'column'} gap={20} layout>
                <Txt fontSize={12} fill={'#646464'}>Output</Txt>
                <CodeBlock
                    minWidth={1185}
                    maxHeight={400}
                    fontSize={20}
                    ref={jsonRef}
                    language="json"
                    code={`
                {
                 
                }
                `}
                />
            </Rect>
        </Rect>
    )

    yield* beginSlide('Slide 1');
    yield* codeRef().selection(lines(1), 0.5)
    yield* jsonRef().edit( 1.5, false)`
    {
      ${insert(`
      "addressId": "*******",
      "houseName": "FLAT 7, TWYFORD HOUSE",
      "houseNumber": "15",
      "country": "GB",
      "county": "",
      "currentSupplierId": "EDS",
      "currentSupplierRegEffectiveDate": "20230606",
      "pendingSupplierRegEffectiveDate": "",
      "deliveryPointAlias": "",
      "dependentStreet": "",
      "doubleDependentLocality": "",
      "gasTransportId": "GT4",
      "ldzId": "SO",
      ...
      `)}
    }
    `

    yield* beginSlide('Slide 2');
    yield* codeRef().selection(lines(2, 4), 0.5);
    yield* jsonRef().edit(1.5, false)`
    {
      ${edit(`
      "addressId": "*******",
      "houseName": "FLAT 7, TWYFORD HOUSE",
      "houseNumber": "15",
      "country": "GB",
      "county": "",
      "currentSupplierId": "EDS",
      "currentSupplierRegEffectiveDate": "20230606",
      "pendingSupplierRegEffectiveDate": "",
      "deliveryPointAlias": "",
      "dependentStreet": "",
      "doubleDependentLocality": "",
      "gasTransportId": "GT4",
      "ldzId": "SO",
      ...
      `, `
      "p_mprn1": "5064605503",
      "p_mprncount": "1",
      "p_gasmeterserial1": "5040022S"`)}
    }
    `


    // yield* beginSlide('Slide 3')
    // yield* codeRef().selection(lines(10), 0.5);

    yield* beginSlide('Slide 3');
    yield* codeRef().edit(1.2, true)`
                if ($response && !$response->hasErrors()) {
                    ${insert(`
                       
                    $gasDetails = collect([
                        'mprn' => null,
                        'meterSerialNumber' => null
                    ]);
                    `)}
                    $response = $response->get()->switchGasData[0];
                    $this->details['p_mprn1'] = $response->mprn;
                    $this->details['p_gasmeterserial1'] = $response->meterSerialNumber;
                    $this->details['p_mprncount'] = '1';
                    
                }`
    yield* jsonRef().edit(1.5, false)`
    {
      ${edit(`
      "p_mprn1": "5064605503",
      "p_mprncount": "1",
      "p_gasmeterserial1": "5040022S"
      `, `
      "mprn": null,
      "meterSerialNumber": null`
      )}
    }
    `

    yield* beginSlide('Slide 4');
    yield* all(
        jsonRef().selection(range(
            1, 3, 1, 7
        ), 2),
        jsonRef().selection(range(
            2, 3, 2, 20
        ), 2),
    )

    yield* beginSlide('Slide 5');
    yield* all( codeRef().edit(1.2, true)`
                if ($response && !$response->hasErrors()) {
                       
                    $gasDetails = collect([
                        'mprn' => null,
                        'meterSerialNumber' => null
                    ]);
                    
                    $response = $response->get()->switchGasData[0];
                    ${insert(`
                    
                    $gasFields = collect($response)->only($gasDetails->keys());
                      `)}
                    $this->details['p_mprn1'] = $response->mprn;
                    $this->details['p_gasmeterserial1'] = $response->meterSerialNumber;
                    $this->details['p_mprncount'] = '1';
                    
                }`,
    yield jsonRef().edit(1.2, true)`
    {
      "mprn": ${edit(`null`, `"5064605503"`)},
      "meterSerialNumber": ${edit(`null`, `"5040022S"`)}
    }
    `,
    yield jsonRef().edit(1.2, true)`
    {
      ${edit(
         `
           "mprn": "5064605503",
           "meterSerialNumber": "5040022S"`,
         `
           "meterSerialNumber": "5040022S",
           "mprn": "5064605503"`
     )}
    }
    `)

    yield* beginSlide('Slide 6');
    yield* codeRef().edit(1.2, true)`
                if ($response && !$response->hasErrors()) {
                       
                    $gasDetails = collect([
                        'mprn' => null,
                        'meterSerialNumber' => null
                    ]);
                    
                    $response = $response->get()->switchGasData[0];
                    
                    $gasFields = collect($response)->only($gasDetails->keys());
                    
                    ${remove(`$this->details[`)}'p_mprn1'${remove(`] = $response->mprn;`)}
                    ${remove(`$this->details[`)}'p_gasmeterserial1'${remove(`] = $response->meterSerialNumber;`)}
                    ${remove(`$this->details[`)}'p_mprncount'${remove(`] = '1';`)}
                    
                }`
    yield* codeRef().selection(lines(11, 15), 1);
    yield* codeRef().edit(1.2, false)`
                if ($response && !$response->hasErrors()) {
                
                    $gasDetails = collect([
                        'mprn' => null,
                        'meterSerialNumber' => null
                    ]);
                    
                    $response = $response->get()->switchGasData[0];
                    
                    $gasFields = collect($response)->only($gasDetails->keys());
                    
                    ${insert(`return collect([`)}
                    ${insert(`    `)}'p_mprn1'${insert(`,`)}
                    ${insert(`    `)}'p_gasmeterserial1'${insert(`,`)}
                    ${insert(`    `)}'p_mprncount'
                    ${insert(`])`)}
                    
                }`
    yield* codeRef().edit(1.2, false)`
                if ($response && !$response->hasErrors()) {
                
                    $gasDetails = collect([
                        'mprn' => null,
                        'meterSerialNumber' => null
                    ]);
                    
                    $response = $response->get()->switchGasData[0];
                    
                    $gasFields = collect($response)->only($gasDetails->keys());
                    
                    return collect([
                        'p_mprn1',
                        'p_gasmeterserial1',
                        'p_mprncount'
                    ])${insert(`->combine($gasFields);`)}
                    
                }`
    yield* jsonRef().edit(1.5, true)`
    {
      "${edit(`meterSerialNumber`, `p_mprn1`)}": "5040022S",
      "${edit(`mprn`,`p_gasmeterserial1`)}": "5064605503"
    }
    `



    yield* beginSlide('Slide 7');
    yield* all(
        jsonRef().selection(range(1, 14, 1,22 ),1.2),
        jsonRef().selection(range(2, 24, 2,34 ),1.2),
    )


    yield* beginSlide('Slide 8');
    yield* codeRef().edit(1.2, true)`
                if ($response && !$response->hasErrors()) {
                
                    $gasDetails = collect([
                        'mprn' => null,
                        'meterSerialNumber' => null
                    ]);
                    
                    $response = $response->get()->switchGasData[0];
                    
                    $gasFields = collect($response)->only($gasDetails->keys());
                    ${insert(`
                    
                    $details = collect($gasDetails)->merge($gasFields)`)}  
                    
                    return collect([
                        'p_mprn1',
                        'p_gasmeterserial1',
                        'p_mprncount'
                    ])->combine(${edit(`$gasFields`, `$details`)});
                   
                }`
    yield* jsonRef().edit(1.5, true)`
    {
      "p_mprn1": ${edit(`"5040022S"`, `"5064605503"`)},
      "p_gasmeterserial1": ${edit(`"5064605503"`, `"5040022S"`)}
    }
    `

    yield* beginSlide('Slide 9');
    yield* codeRef().selection(lines(16), 1)
    yield* codeRef().selection(lines(11), 1)
    yield* all(
        codeRef().edit(1.2, false)`
                if ($response && !$response->hasErrors()) {
                
                    $gasDetails = collect([
                        'mprn' => null,
                        'meterSerialNumber' => null
                    ]);
                    
                    $response = $response->get()->switchGasData[0];
                    
                    $gasFields = collect($response)->only($gasDetails->keys());
                    
                    $details = collect($gasDetails)->merge($gasFields)${insert(`->put('p_mprncount', 1);`)}
                    
                    return collect([
                        'p_mprn1',
                        'p_gasmeterserial1',
                        'p_mprncount'
                    ])->combine($details);
                   
                }`,
        jsonRef().edit(1.5, true)`
        {
          "p_mprn1": "5064605503",
          "p_gasmeterserial1": "5040022S",
          ${insert(`"p_mprncount": "1"`)}
        }
        `,)
    yield* jsonRef().selection(DEFAULT, 1)

    yield* beginSlide('Slide 9');
    yield* jsonRef().maxHeight(1000);
    yield* jsonRef().language('js')
    yield* jsonRef().height(500);
    yield*
    all(
        codeRef().edit(1.2, false)`
        App\\Models\\Sales\\Tariff::all();
        `,
        codeRef().selection(DEFAULT, 1),
        jsonRef().edit(1.2, false)`
         [
           App\\Models\\Sales\\Tariff {#6876 …8},
           App\\Models\\Sales\\Tariff {#6185 …8},
           App\\Models\\Sales\\Tariff {#6883 …8},
           App\\Models\\Sales\\Tariff {#6882 …8},
           App\\Models\\Sales\\Tariff {#6879 …8},
           App\\Models\\Sales\\Tariff {#6179 …8},
           App\\Models\\Sales\\Tariff {#3844 …8},
           App\\Models\\Sales\\Tariff {#6884 …8},
           App\\Models\\Sales\\Tariff {#3847 …8},
           App\\Models\\Sales\\Tariff {#6183 …8},
           App\\Models\\Sales\\Tariff {#4137 …8},
           App\\Models\\Sales\\Tariff {#4138 …8},
           App\\Models\\Sales\\Tariff {#4139 …8},
           App\\Models\\Sales\\Tariff {#6699 …8},
           App\\Models\\Sales\\Tariff {#6877 …8}
           ...
         ],
    `,
    )

    yield* beginSlide('Slide 10');
    yield* codeRef().edit(1.2)`App\\Models\\Sales\\Tariff::all()${insert(`->chunk(3)`)};`
    yield* codeRef().edit(1.2)`App\\Models\\Sales\\Tariff::all()->chunk(3)${insert(`->first()`)};`
    yield* tween(0.6, value => {
        jsonRef().height(map(500, 600, value))
    });
    yield* jsonRef().edit(1.2, false)`${remove(
        `     [
       App\\Models\\Sales\\Tariff {#6876 …8},
       App\\Models\\Sales\\Tariff {#6185 …8},
       App\\Models\\Sales\\Tariff {#6883 …8},
       App\\Models\\Sales\\Tariff {#6882 …8},
       App\\Models\\Sales\\Tariff {#6879 …8},
       App\\Models\\Sales\\Tariff {#6179 …8},
       App\\Models\\Sales\\Tariff {#3844 …8},
       App\\Models\\Sales\\Tariff {#6884 …8},
       App\\Models\\Sales\\Tariff {#3847 …8},
       App\\Models\\Sales\\Tariff {#6183 …8},
       App\\Models\\Sales\\Tariff {#4137 …8},
       App\\Models\\Sales\\Tariff {#4138 …8},
       App\\Models\\Sales\\Tariff {#4139 …8},
       App\\Models\\Sales\\Tariff {#6699 …8},
       App\\Models\\Sales\\Tariff {#6877 …8}
       ...
     ],
       `)}
     ${insert(
     `=> Illuminate\\Database\\Eloquent\\Collection {#5809
      all: [
       App\\Models\\Sales\\Tariff {#4405
         id: 5,
         name: "Basic Variable",
         supplier_id: 1,
         meta: ...,
         created_at: "2022-01-26 20:11:20",
         updated_at: "2023-05-30 09:52:49",
         batch: 1685436766,
         deleted_at: null,
       },
       App\\Models\\Sales\\Tariff {#4404
         id: 6,
         ...
       },
       App\\Models\\Sales\\Tariff {#6579
         id: 11,
         ...
       },
      ],
    }`)}
    `

    yield* beginSlide('Slide 11');
    yield* all(codeRef().selection(range(0, 32, 0, 40), 1.2),
    jsonRef().selection(lines(3, 20), 1.2))

    yield* beginSlide('Slide 12');
    yield* all(
        codeRef().selection(DEFAULT, 1),
        jsonRef().selection(DEFAULT, 1)
    )

    yield* beginSlide('Slide 13');
    yield* all(
        codeRef().edit(1.2)`App\\Models\\Sales\\Tariff::all()->chunk(3)->first()${insert(`->pluck('name')`)};`,
        jsonRef().edit(1.2)`
        ${remove(
            `=> Illuminate\\Database\\Eloquent\\Collection {#5809
      all: [
       App\\Models\\Sales\\Tariff {#4405
         id: 5,
         name: "Basic Variable",
         supplier_id: 1,
         meta: ...,
         created_at: "2022-01-26 20:11:20",
         updated_at: "2023-05-30 09:52:49",
         batch: 1685436766,
         deleted_at: null,
       },
       App\\Models\\Sales\\Tariff {#4404
         id: 6,
         ...
       },
       App\\Models\\Sales\\Tariff {#6579
         id: 11,
         ...
       },
      ],
    }`)}
     ${insert(
     `    => Illuminate\\Support\\Collection {#4054
       all: [
         "Basic Variable",
         "Basic Variable Single Rate",
         "Exclusive Fixed April 2023 B1",
         "Exclusive Fixed Help Beat Cancer May 2023",
       ],
     }
        `)}`
    )

    yield* beginSlide('Slide 14');
    yield* codeRef().edit(1.2)`App\\Models\\Sales\\Tariff::all()${remove(`->chunk(3)->first()->pluck('name')`)};`
    yield* codeRef().edit(1.2)`App\\Models\\Sales\\Tariff::all()${insert(`->mapToGroups()`)};`
    yield* all(
        codeRef().edit(1.2)`App\\Models\\Sales\\Tariff::all()->mapToGroups(
        ${insert(`function ($tariff, $key) {
             return [$tariff['supplier_id'] => $tariff['name']]; 
        }`)});`,
        jsonRef().edit(1.2)`${edit(`    => Illuminate\\Support\\Collection {#4054
       all: [
         "Basic Variable",
         "Basic Variable Single Rate",
         "Exclusive Fixed April 2023 B1",
         "Exclusive Fixed Help Beat Cancer May 2023",
       ],
     }
        `, `    => Illuminate\\Support\\Collection {#4054
       all: [
          10 => Illuminate\\Database\\Eloquent\\Collection {#4865
           all: [
            "Good to Fix September 2023",
            "Good to Fix March 2023 v6",
            "Good to Fix June 2023",
           ...
           ],
          },
          20 => Illuminate\\Database\\Eloquent\\Collection {#4864
           all: [
            "Smart Energy",
            "Smart E7",
            ...
           ],
          },
          21 => Illuminate\\Database\\Eloquent\\Collection {#6309
           all: [
            "Energy Assist",
           ],
          },
        ...
       ]
     }
        `
        
        )}`
    )

    yield* beginSlide('Slide 14');
    yield* all(
        codeRef().edit(1.2)`App\\Models\\Sales\\Tariff::all()->mapToGroups(
        function ($tariff, $key) {
             return [${edit(`$tariff['supplier_id']`, `Supplier::where('id', $tariff['supplier_id'])->pluck('name')->first()`)} => $tariff['name']]; 
        });`,
        jsonRef().edit(1.2)`    => Illuminate\\Support\\Collection {#4054
       all: [
          [${edit(`10`, `"Good Energy"`)} => Illuminate\\Database\\Eloquent\\Collection {#4865
           all: [
            "Good to Fix September 2023",
            "Good to Fix March 2023 v6",
            "Good to Fix June 2023",
           ...
           ],
          },
          [${edit(`20`, `"Utilita"`)} => Illuminate\\Database\\Eloquent\\Collection {#4864
           all: [
            "Smart Energy",
            "Smart E7",
            ...
           ],
          },
          [${edit(`21`, `"SSE Atlantic"`)} => Illuminate\\Database\\Eloquent\\Collection {#6309
           all: [
            "Energy Assist",
           ],
          },
        ...
       ]
     }
        `
    )
})