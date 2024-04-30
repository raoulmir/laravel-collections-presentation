import {makeScene2D, Txt, Rect} from '@motion-canvas/2d';
import {all, createRef, beginSlide, waitFor} from '@motion-canvas/core';
import {CodeBlock, lines, range, remove, insert} from '@motion-canvas/2d/lib/components/CodeBlock';



export default makeScene2D(function* (view) {
    const title = createRef<Txt>();
    view.add(<Txt ref={title} />);
    view.fill('#242424')

    const codeRef = createRef();

    title().text('Code:');
    yield view.add(
        <CodeBlock ref={codeRef} language="js"
                   code={`
        const isAnimated = true
        if (isAnimated) {
           console.log('success')
        } else {
           console.log ('failed')
        }
        `}/>
    )

    yield* beginSlide('Laravel Collections');
    yield* waitFor(1);
    yield* codeRef().selection(range(0, 19, 0, 24))

    title().text('Slide Two');
    yield* beginSlide('Slide 2');
    yield* waitFor(1);
    yield* codeRef().selection(range(1, 4, 1, 14));

    title().text('Slide Three');
    yield* beginSlide('Slide 3');
    yield* codeRef().selection(lines(2), 1);
    yield* waitFor(1);

    title().text('Slide Four');
    yield* beginSlide('Slide 4');
    yield* codeRef().selection(lines(0), 1);
    yield* codeRef().edit(1.2)`
    const isAnimated = ${remove(`true`)}
    if (isAnimated) {
       console.log('success')
    } else {
       console.log ('failed')
    }
    `
    yield* waitFor(1);

    title().text('Slide Five');
    yield* beginSlide('Slide 5');
    yield* codeRef().edit(1.2)`
    const isAnimated = ${insert(`false`)}
    if (isAnimated) {
       console.log('success')
    } else {
       console.log ('failed')
    }
    `;
    yield* waitFor(1);

    title().text('Slide Six');
    yield* beginSlide('Slide 6');
    yield* codeRef().selection(lines(4), 1);
    yield* waitFor(1);

    title().text('End Slide');
    yield* beginSlide('End');
    yield* waitFor(1);
})