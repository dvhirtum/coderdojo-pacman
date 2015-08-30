function PacMan (options) {
    var self = this;
                    
    self.context = options.context;
    self.image = options.image;
    self.size = 96;
    self.cellsize = 24;
    self.x = 13 * self.cellsize;
    self.y = 23 * self.cellsize;

    self.animations = {
        idle: [
            {x: 0, y: 672}
        ],
        left: [
            {x: 0, y: 672},
            {x: 196, y: 288},
            {x: 4, y: 288},
            {x: 196, y: 288}
        ],
        right: [
            {x: 0, y: 672},
            {x: 580, y: 288},
            {x: 388, y: 288},
            {x: 580, y: 288}
        ],
        up: [
            {x: 0, y: 672},
            {x: 292, y: 288},
            {x: 100, y: 288},
            {x: 292, y: 288}
        ],
        down: [
            {x: 0, y: 672},
            {x: 676, y: 288},
            {x: 484, y: 288},
            {x: 676, y: 288}
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
               self.size,
               self.size,
               self.x,
               self.y,
               self.size * 0.5,
               self.size * 0.5);
        },
        update: function () {
            self.activeAnimationState++;
            if (self.activeAnimationState >= self.activeAnimation.length) {
                self.activeAnimationState = 0;
            }
        }
    };
}