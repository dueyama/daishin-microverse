class CodeDrawActor {
    setup() {
        console.log("CodeDrawActor.setup");
    }
}

class CodeDrawPawn {
    setup() {
        console.log("CodeDrawPawn.setup");
    }

    resize(width, height) {
        console.log(width, height);
    }

    clear() {
        console.log("CLEAR")
        let canvas = this.canvas;
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.texture.needsUpdate = true;
    }
}

export default {
    modules: [
        {
            name: "CodeDraw",
            actorBehaviors: [CodeDrawActor],
            pawnBehaviors: [CodeDrawPawn],
        }
    ]
};

/* globals Microverse */

