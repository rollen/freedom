function love.load()
  bg = love.graphics.newImage("bg.png")
  hero = {}
  hero.x = 300
  hero.y = 450
  hero.speed = 100
  hero.width = 30
  hero.height = 150
  hero.shots = {}

  enemies = {}
  for i=0,7 do
    enemy = {}
    enemy.width = 40
    enemy.height = 20
    enemy.x = i * (enemy.width + 60) + 100
    enemy.y = enemy.height + 100
    table.insert(enemies, enemy)
  end
end

function love.update(dt)
  if love.keyboard.isDown("left") then
    hero.x = hero.x - hero.speed*dt
  elseif love.keyboard.isDown("right") then
    hero.x = hero.x + hero.speed*dt
  end

  for i,v in ipairs(enemies) do
    v.y = v.y + dt

    if v.y >= 465 then
    end
  end

  local remEnemy = {}
  local remShot = {}

  for i,v in ipairs(hero.shots) do
    v.y = v.y - dt * 100

    if v.y <= 0 then
      table.insert(remShot, i)
    end

    for ii,vv in ipairs(enemies) do
      if CheckCollision(v.x, v.y, 2, 5, vv.x, vv.y, vv.width, vv.height) then
        table.insert(remEnemy, ii)

        table.insert(remShot, i)
      end
    end
  end

  for i,v in ipairs(remEnemy) do
    table.remove(enemies, v)
  end

  for i,v in ipairs(remShot) do
    table.remove(hero.shots, v)
  end
end

function love.draw()
  love.graphics.setColor(255,255, 255, 255)
  love.graphics.draw(bg)
  love.graphics.setColor(0, 255, 0, 255)
  love.graphics.rectangle("fill", 0, 465, 800, 150)

  love.graphics.setColor(255, 255, 0, 255)
  love.graphics.rectangle("fill", hero.x, hero.y, 30, 15)

  for i,v in ipairs(enemies) do
    love.graphics.rectangle("fill", v.x, v.y, v.width, v.height)
  end

  love.graphics.setColor(255, 255, 255, 255)
  for i,v in ipairs(hero.shots) do
    love.graphics.rectangle("fill", v.x, v.y, 2, 5)
  end
end

function shoot()
  local shot = {}
  shot.x = hero.x + hero.width/2
  shot.y = hero.y
  table.insert(hero.shots, shot)
end

function love.keyreleased(key)
  if(key == " ") then
    shoot()
  end
end

function CheckCollision(box1x, box1y, box1w, box1h, box2x, box2y, box2w, box2h)
    if box1x >= box2x + box2w - 1 or -- Is box1 on the right side of box2?
       box1y >= box2y + box2h - 1 or -- Is box1 under box2?
       box2x >= box1x + box1w - 1 or -- Is box2 on the right side of box1?
       box2y >= box1y + box1h - 1    -- Is b2 under b1?
    then
        return false                -- No collision. Yay!
    else
        return true                 -- Yes collision. Ouch!
    end
end
