module ApplicationHelper
  ### ONLY ONE USER
  # {
  #   "user": {
  #     "id": 1,
  #     "username": "Allen",
  #     "gender": "male",
  #     "email": "allen@dxhackers.com"
  #     "password": "abcdefg",
  #     "age": 23,
  #     "hobby": [ "sport", "movie", "music" ],
  #     "career": "programmer"
  #   },
  #   "success": true
  # }
  #
  ### MORE THAN ONE USER
  # {
  #   "users": [{
  #     "id": 1,
  #     "username": "Allen",
  #     "gender": "male",
  #     "email": "allen@dxhackers.com"
  #     "password": "abcdefg",
  #     "age": 23,
  #     "hobby": [ "sport", "movie", "music" ],
  #     "career": "programmer"
  #   },
  #   {
  #     "id": 2,
  #     "username": "J.L",
  #     "gender": "male",
  #     "email": "jiahao@dxhackers.com"
  #     "password": "dongxi",
  #     "age": 23,
  #     "hobby": [ "sport", "movie", "music" ],
  #     "career": "CEO"
  #   }],
  #   "success": true
  # }
  def json_for(users)
    if users.is_a? Array
      users.compact!
      result = if users.empty?
                 { success: false }
               else
                 { success: true, users: users.map { |u| u.as_json["user"] } }
               end
    elsif users.is_a? User
      user = users
      result = if user.nil?
                 { success: false }
               else
                 user.as_json.merge({ success: true })
               end
    else
      result = { success: false }
    end
    result.to_json
  end
end
