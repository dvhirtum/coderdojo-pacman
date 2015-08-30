function PacMan (options) {
    var self = this;
                    
    self.context = options.context;
    self.image = options.image;
    self.scaleFactor = options.scaleFactor || 0.25;
    self.cellsize = options.cellsize || 24;
    self.width = 96;
    self.height = 96;
    self.x = 13 * self.cellsize;
    self.y = 23 * self.cellsize;

    self.animations = {
        idle: [
            {x: 1, y: 672}
        ],
        left: [
            {x: 1, y: 672},
            {x: 197, y: 288},
            {x: 5, y: 288},
            {x: 197, y: 288}
        ],
        right: [
            {x: 1, y: 672},
            {x: 581, y: 288},
            {x: 389, y: 288},
            {x: 581, y: 288}
        ],
        up: [
            {x: 1, y: 672},
            {x: 293, y: 288},
            {x: 101, y: 288},
            {x: 293, y: 288}
        ],
        down: [
            {x: 1, y: 672},
            {x: 674, y: 288},
            {x: 482, y: 288},
            {x: 674, y: 288}
        ]
    }

    self.activeAnimation = self.animations.idle;
    self.activeAnimationState = 0;

    return {
        draw: function () {
            self.context.drawImage(
               self.image,
               self.activeAnimation[self.activeAnimationState].x,
               self.activeAnimation[self.activeAnimationState].y,
               self.width,
               self.height,
               self.x,
               self.y,
               self.width * self.scaleFactor,
               self.height * self.scaleFactor);
        },
        update: function () {
            self.activeAnimationState++;
            if (self.activeAnimationState >= self.activeAnimation.length) {
                self.activeAnimationState = 0;
            }
        }
    };
}